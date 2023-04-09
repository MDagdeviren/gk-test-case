import React from 'react';
import { Link } from 'react-router-dom';
// ** Components
import HeartButton from './HeartButton';
// ** Types
import { AdvertListData } from 'src/types/Advert';

interface AdvertCardProps {
  data: AdvertListData;
}

const AdvertCard = (props: AdvertCardProps) => {
  const { data } = props;
  return (
    <div className='group col-span-1 cursor-pointer rounded-b-lg bg-[#F9FBFF] shadow-[0_3px_4px_0_#e5edff] '>
      <div className='flex flex-col font-[Montserrat]'>
        <div className='relative w-full overflow-hidden rounded-xl'>
          <Link target='_blank' to={`/advert/${data.advert_id}`}>
            <img
              className='h-[200px] w-full object-cover object-center transition group-hover:scale-110'
              src={data.photo_links[0]}
              alt='Advert'
            />
          </Link>

          <div className='absolute right-3 top-3'>
            <HeartButton />
          </div>
        </div>
        <Link target='_blank' to={`/advert/${data.advert_id}`}>
          <div className='flex h-[220px] flex-col justify-center space-y-2 p-5'>
            <div className='flex gap-2'>
              <p className='text-lg font-semibold'>
                {data.monthly_rental_fee.toLocaleString('tr-TR', {
                  maximumFractionDigits: 0,
                })}{' '}
                TL / Aylık
              </p>
              {data.is_advert_approved && <img src='images/tick.svg' alt='' />}
            </div>
            <div>
              <p className='text-[17px] font-medium'>{data.public_address}</p>
            </div>
            <div>
              <p className='text-[15px] font-medium'>{data.detail_text}</p>
            </div>
            <div className='flex flex-grow items-end justify-between'>
              <div>
                <p className='overflow-hidden whitespace-nowrap text-sm font-semibold md:text-base 2xl:text-lg '>
                  {data.net_area}m² Net
                </p>
              </div>
              <div>
                <p className='overflow-hidden whitespace-nowrap text-sm font-medium md:text-base 2xl:text-lg '>
                  {data.room_number}+{data.lounge_number} | {data.bathroom_number} Banyo
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdvertCard;
