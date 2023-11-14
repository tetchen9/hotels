import React from 'react'
import { Hotel } from '../../types'
import { sortHotelsByPrice } from '../utils'
import HotelCard from '../hotelCard'
import './styles.scss'

interface HotelsListProps {
  hotels: Hotel[]
}

function HotelsList({hotels} : HotelsListProps) {

  const sortedHotels = sortHotelsByPrice(hotels)

  const hotelsList = sortedHotels.map((hotel) => {
    return (
      <HotelCard hotel={hotel} key={hotel.name}></HotelCard>
    )
  })
  
  return (<div>
    {hotelsList}
  </div>)
}

export default HotelsList
