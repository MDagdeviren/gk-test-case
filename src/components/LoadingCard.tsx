import React from 'react';

const LoadingCard = () => {
  return (
    <div className='group col-span-1 animate-pulse cursor-pointer rounded-b-lg bg-[#F9FBFF] shadow-[0_3px_4px_0_#e5edff]'>
      <div className='flex flex-col font-[Montserrat]'>
        <div className='h-[200px] w-full rounded-xl bg-slate-700'></div>
        <div className='flex h-[220px] flex-col justify-center space-y-6 p-5 '>
          <div className='h-2 w-2/3 gap-2 rounded bg-slate-700'></div>
          <div className='h-2 w-full gap-2 rounded bg-slate-700'></div>
          <div className='h-2 w-3/4 gap-2 rounded bg-slate-700'></div>

          <div className='flex flex-grow items-end justify-between'>
            <div className='h-2 w-1/4 gap-2 rounded bg-slate-700'></div>
            <div className='h-2 w-1/4 gap-2 rounded bg-slate-700'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
