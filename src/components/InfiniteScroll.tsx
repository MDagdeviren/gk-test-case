import React, { useCallback, useEffect, useRef, useState } from 'react';

type Props<T> = {
  fetchMoreData: () => void;
  data: T[] | [] | undefined;
  hasMore: boolean;
  renderItem: (item: T) => React.ReactNode;
  loadingComponent?: React.ReactNode;
};

function InfiniteScroll<T>({
  fetchMoreData,
  data,
  hasMore,
  renderItem,
  loadingComponent = <p>Loading...</p>,
}: Props<T>) {
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastDataRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading || !node || !hasMore) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setLoading(true);
          fetchMoreData();
          setLoading(false);
        }
      });

      observer.current.observe(node);
    },
    [loading, hasMore, fetchMoreData],
  );

  useEffect(() => {
    setLoading(false);
  }, [data]);

  return (
    <>
      {data?.map((item, index) => {
        if (data.length === index + 1) {
          return (
            <div key={index} ref={lastDataRef}>
              {renderItem(item)}
            </div>
          );
        } else {
          return <div key={index}>{renderItem(item)}</div>;
        }
      })}
      {loading && loadingComponent}
    </>
  );
}

export default InfiniteScroll;
