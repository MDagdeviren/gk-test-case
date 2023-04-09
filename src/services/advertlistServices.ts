import axios from 'axios';

import { AdvertListReq } from 'src/types/Advert';

export const getAdvertList = async (postData: AdvertListReq) => {
  try {
    const response = await axios.post('/api/v1/advertlist', postData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
