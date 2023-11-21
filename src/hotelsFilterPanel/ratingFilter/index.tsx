import React, { useState } from 'react'
import { Rating } from '../../../types'
import HotelRating from '../../hotelRating'
import { Option, RATING_ALL, getSelectedRatings } from './ratingUtils'
import './styles.scss'

interface RatingFilterProps {
  setRatings: (ratings: Rating[]) => void
}

const optionLabels: Array<Rating | string> = [RATING_ALL, 5, 4, 3, 2, 1, 'Unrated']

function RatingFilter({ setRatings }: RatingFilterProps) {
  const [options, setOptions] = useState(() => populateCheckboxesWithDefaultValues())

  function populateCheckboxesWithDefaultValues(): Option[] {
    return optionLabels.map((label) => {
      return {
        label,
        isChecked: label === RATING_ALL ? true : false
      }
    })
  }
  
  const checkboxes = options.map(({label, isChecked}, index) => {
    let labelElement = typeof label === 'number' 
      ? <HotelRating rating={label as Rating}></HotelRating>
      : label

    return (
      <div className='checkbox-wrapper' key={label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleChange(index)}
          />
        <label>{labelElement}</label>
      </div>
    )
  })
  
  const allIndex = optionLabels.indexOf(RATING_ALL)

  const handleChange = (checkedIndex: number) => {
    const updatedOptions = options.map((option, i) => {
      const { isChecked : wasChecked } = option
      let isChecked = checkedIndex === i ? !wasChecked : wasChecked
      // if a number was checked, uncheck RATING_ALL
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
    setRatings(ratings)
  }

  return (
    <div>
      {checkboxes}
    </div>
  )
}

export default RatingFilter


