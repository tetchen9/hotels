import React from 'react'
import { Hotel } from '../../types'
import './styles.scss'

interface HotelsListProps {
  hotels: Hotel[]
}

function HotelsList({hotels} : HotelsListProps) {
  const hotelsList = hotels.map((hotel) => {
    return (<div key={hotel.name}>{hotel.name}</div>)
  })
  
  return (<>
    {hotelsList}
  </>)
}

export default HotelsList
