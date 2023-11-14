import React from 'react'
import { Hotel } from '../../types'
import './styles.scss'

interface HotelsListProps {
  hotels: Hotel[]
}

function HotelsList({hotels} : HotelsListProps) {
  const hotelsList = hotels.map((hotel) => {
    return (<div key={hotel.name} className='hotelitem'>
      {hotel.name}
    </div>)
  })
  
  return (<div>
    {hotelsList}
  </div>)
}

export default HotelsList
