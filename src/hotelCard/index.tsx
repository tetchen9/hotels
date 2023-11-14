import React from 'react'
import { Hotel } from '../../types'
import HotelRating from '../hotelRating'
import './styles.scss'

interface HotelCardProps {
  hotel: Hotel
}

function HotelCard({hotel} : HotelCardProps) {
  const imgSource = `${process.env.PUBLIC_URL}/images/${hotel.image}`
  return (
    <div key={hotel.name} className="hotelitem">
      <img src={imgSource} alt="hotel photo" />
      <div>
        <h3>{hotel.name}</h3>
        <HotelRating rating={hotel.rating}></HotelRating>
        {hotel.roomType}
      </div>
      <div>
        {hotel.price}
      </div>
    </div>
  )

}

export default HotelCard
