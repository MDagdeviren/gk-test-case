export interface AdvertListReq {
  page_number: number;
  number_of_advert: number;
  advert_order_menu_id: number;
  mapData: null;
  cityRequest: null;
  advertListDetailData: null;
  property_type_ids: null;
}

export interface AdvertListRes {
  advert_count: number;
  city_name: null;
  advertListDatas: AdvertListData[] | [];
  clusterDatas: null;
  message: Message;
}

export interface AdvertListData {
  advert_id: number;
  advert_main_id: number;
  advert_header_text: string;
  latitude: number;
  longitude: number;
  room_number: number;
  bathroom_number: number;
  lounge_number: number;
  monthly_rental_fee: number;
  photo_links: string[];
  home_definition: string;
  property_type_text: string;
  net_area: number;
  property_qualification_text: string;
  public_address: string;
  total_fee: number;
  detail_text: string;
  is_advert_approved: boolean;
  is_favorite: boolean;
  estate_office_type_id: null;
}

export interface Message {
  error_text: string;
  error_code: string;
  is_error: boolean;
  result_text: string;
  result_ok: boolean;
  result_code: string;
  transaction_id: string;
}
