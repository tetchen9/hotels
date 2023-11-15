import React, { useState } from 'react'
import './styles.scss'
import { Rating } from '../../types'
import HotelRating from '../hotelRating'

interface RatingFilterProps {
  setRating: (query: Rating) => void
}

const optionLabels: Array<Rating | string> = ['All', 5, 4, 3, 2, 1, 'Unrated']

function RatingFilter({setRating}: RatingFilterProps) {
  const [options, setOptions] = useState(() => {
    return optionLabels.map((label) => {
      return {
        label,
        isChecked: label === 'All' ? true : false
      }
    })
  })

  const checkboxes = options.map(({label, isChecked}, index) => {
    let labelElement = typeof label === 'number' 
      ? <HotelRating rating={label as Rating}></HotelRating>
      : label

    return (<div className='checkbox-wrapper' key={label}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleChange(index)}
      />
      <label>{labelElement}</label>
    </div>)
  })
  
  const handleChange = (index: number) => {
    const updatedOptions = options.map((option, i) => {
      const { isChecked } = option
      return {
        ...option,
        isChecked: index === i ? !isChecked : isChecked
      } 
    })
    setOptions(updatedOptions)
  }

  return (
    <div>
      {checkboxes}
    </div>
  )
}

export default RatingFilter
