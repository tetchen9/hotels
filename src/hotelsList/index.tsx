import React from 'react'
import { Hotel } from '../../types'
import { sortHotelsByPrice } from '../utils'
import './styles.scss'

interface HotelsListProps {
  hotels: Hotel[]
}

function HotelsList({hotels} : HotelsListProps) {

  const sortedHotels = sortHotelsByPrice(hotels)

  const hotelsList = sortedHotels.map((hotel) => {
    return (<div key={hotel.name} className='hotelitem'>
      {hotel.name}
      {hotel.price}
    </div>)
  })
  
  return (<div>
    {hotelsList}
  </div>)
}

export default HotelsList
