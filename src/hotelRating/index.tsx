import React from 'react'
import clsx from 'clsx'
import { Rating } from '../../types'
import './styles.scss'

interface HotelRatingProps {
  rating: Rating
}

function HotelRating({rating} : HotelRatingProps) {
  const intRating = Math.ceil(rating)
  const isDecimal = intRating > rating

  const rhombuses = Array.from(Array(intRating))
    .map((r, i) => {
      const isHalfRhombus = isDecimal && i === intRating - 1
      const style = clsx('rhombus', {
        'rhombus-half': isHalfRhombus,
        'rhombus-full': !isHalfRhombus,
      })
      return <div className={style} key={i}></div>
    })

  return (<>
    {!!rating && 
      <div className="hotel-rating">
        {rhombuses}
      </div>
    }
  </>)
}

export default HotelRating
