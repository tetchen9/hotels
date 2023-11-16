import React, { useState } from 'react'
import './styles.scss'
import { Rating } from '../../types'
import HotelRating from '../hotelRating'
import { getSelectedRatings } from './ratingUtils'

interface RatingFilterProps {
  setRating: (ratings: Rating[]) => void
}

const optionLabels: Array<Rating | string> = ['All', 5, 4, 3, 2, 1, 'Unrated']

function RatingFilter({ setRating }: RatingFilterProps) {
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
  
  const allIndex = optionLabels.indexOf('All')

  const handleChange = (checkedIndex: number) => {
    const updatedOptions = options.map((option, i) => {
      const { isChecked : wasChecked } = option
      let isChecked = checkedIndex === i ? !wasChecked : wasChecked
      // if a number was checked, uncheck 'All'
      if (i === allIndex && checkedIndex !== allIndex) {
        isChecked = false
      }
      return {
        ...option,
        isChecked,
      } 
    })

    const ratings: Rating[] = getSelectedRatings(updatedOptions)

    setOptions(updatedOptions)
    setRating(ratings)
  }

  return (
    <div>
      {checkboxes}
    </div>
  )
}

export default RatingFilter


