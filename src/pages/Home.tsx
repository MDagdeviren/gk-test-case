import React, { useState, useEffect } from 'react';

// ** Components
import Container from 'src/components/Container';
import LoadingCard from 'src/components/LoadingCard';
import AdvertCard from 'src/components/home/AdvertCard';
import InfiniteScroll from 'src/components/InfiniteScroll';

// ** Services
import { getAdvertList } from 'src/services/advertlistServices';

// ** Types
import { AdvertListData, AdvertListReq, AdvertListRes } from 'src/types/Advert';

const Home = () => {
  // ** States
  const [reqData, setReqData] = useState<AdvertListReq>({
    page_number: 1,
    number_of_advert: 20,
    advert_order_menu_id: 3,
    mapData: null,
    cityRequest: null,
    advertListDetailData: null,
    property_type_ids: null,
  });
  const [advertList, setAdvertList] = useState<AdvertListRes>();
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // ** Render Items
  const firstLoading = Array.from({ length: reqData.number_of_advert }, (_, index) => (
    <LoadingCard key={index}></LoadingCard>
  ));

  const renderItem = (item: AdvertListData) => {
    return <AdvertCard data={item} />;
  };
  // ** Functions
  const fetchMoreData = () => {
    getAdvertList({
      ...reqData,
      page_number: reqData.page_number + 1,
    })
      .then((res: AdvertListRes) => {
        setAdvertList(
          (prev) =>
            ({
              ...res,
              advertListDatas: [...(prev?.advertListDatas || []), ...res.advertListDatas],
            } as AdvertListRes),
        );
        setHasMore(res.advertListDatas.length > 0);
      })
      .finally(() => {
        setReqData((prev) => {
          return {
            ...prev,
            page_number: prev.page_number + 1,
          };
        });
      });
  };

  useEffect(() => {
    getAdvertList(reqData)
      .then((res) => {
        setAdvertList(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <Container>
        <div className='grid grid-cols-1 gap-7 xs:grid-cols-2 xl:grid-cols-4 '>
          {loading ? (
            firstLoading
          ) : (
            <InfiniteScroll
              fetchMoreData={fetchMoreData}
              data={advertList?.advertListDatas}
              hasMore={hasMore}
              renderItem={renderItem}
              loadingComponent={<p>Loading...</p>}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Home;
