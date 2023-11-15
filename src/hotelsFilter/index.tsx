import React from 'react'
import './styles.scss'
import InputSearch from '../inputSearch'
import { Rating } from '../../types'
import RatingFilter from '../ratingFilter'

interface HotelsFilterProps {
  setQueryString: (query: string) => void
  setRating: (rating: Rating) => void
}

function HotelsFilter({ setQueryString, setRating } : HotelsFilterProps) {
  const title = 'Filter Results'

  return (<div className='filter-wrapper'>
    <strong>{title}</strong>
    <hr/>
    <InputSearch setQueryString={setQueryString}></InputSearch>

    <hr/>
    <RatingFilter setRating={setRating}></RatingFilter>

  </div>)
}

export default HotelsFilter
