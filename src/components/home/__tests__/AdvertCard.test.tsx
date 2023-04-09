import React from 'react';
import { render, screen } from '@testing-library/react';
import AdvertCard from '../AdvertCard';
import { AdvertListData } from 'src/types/Advert';
import { BrowserRouter } from 'react-router-dom';
describe('AdvertCard', () => {
  const testAdvert: AdvertListData = {
    advert_id: 123,
    advert_main_id: 1234,
    estate_office_type_id: null,
    home_definition: 'Definition',
    is_favorite: false,
    latitude: 323.3213,
    longitude: 321.3213,
    property_qualification_text: 'Test property',
    property_type_text: 'Type Test',
    total_fee: 324234,
    advert_header_text: 'Header',
    photo_links: ['https://example.com/image.jpg'],
    monthly_rental_fee: 1000,
    is_advert_approved: true,
    public_address: 'Test Address',
    detail_text: 'Test Description',
    net_area: 100,
    room_number: 2,
    lounge_number: 1,
    bathroom_number: 2,
  };

  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <AdvertCard data={testAdvert} />
      </BrowserRouter>,
    );

    expect(screen.getByAltText('Advert')).toBeInTheDocument();
    expect(screen.getByText('1.000 TL / Aylık')).toBeInTheDocument();
    expect(screen.getByText('Test Address')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('100m² Net')).toBeInTheDocument();
    expect(screen.getByText('2+1 | 2 Banyo')).toBeInTheDocument();
  });
});
