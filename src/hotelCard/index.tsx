import React from 'react'
import { breakpointTabletPx } from '../const'
import { Hotel } from '../../types'
import HotelRating from '../hotelRating'
import './styles.scss'

interface HotelCardProps {
  hotel: Hotel
}

function HotelCard({hotel} : HotelCardProps) {
  const imgSource = `${process.env.PUBLIC_URL}/images/${hotel.image}`
  const imgSourceMobile = imgSource.replace('.webp', '-mobile.webp')

  return (
    <article key={hotel.name} className="hotel-item">
      <picture className='hotel-photo-wrap'>
        <source media={`(min-width: ${breakpointTabletPx}px)`} 
          srcSet={imgSource} type="image/webp"/>
        <img className="hotel-photo" src={imgSourceMobile} alt="hotel" />
      </picture>
      <div className="hotel-summary">
        <h3>{hotel.name}</h3>
        <HotelRating rating={hotel.rating}></HotelRating>
        <div className='room-type'><strong>Room type:</strong>{hotel.roomType}</div>
      </div>
      <div className="price">
        {`$${hotel.price}`}
      </div>
    </article>
  )
}

export default HotelCard
