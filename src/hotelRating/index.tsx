import React from 'react'
import clsx from 'clsx'
import { Rating } from '../../types'
import './styles.scss'

interface HotelRatingProps {
  rating: Rating
}

function HotelRating({rating} : HotelRatingProps) {
  const intRating = Math.ceil(rating)
  const hasHalf = intRating > rating

  const rhombuses = Array.from(Array(intRating))
    .map((r, i) => {
      const isHalf = hasHalf && i === intRating - 1
      const style = clsx('rhombus', {
        'rhombus-half': isHalf,
        'rhombus-full': !isHalf,
      })
      return <div className={style} key={i}></div>
    })

  return (
    <div className="hotel-rating">
      {rhombuses}
    </div>
  )
}

export default HotelRating
