import React from 'react'
import './styles.scss'
import InputSearch from '../inputSearch'
import { Rating } from '../../types'
import RatingFilter from '../ratingFilter'

interface HotelsFilterPanelProps {
  setQueryString: (query: string) => void
  setRatings: (rating: Rating[]) => void
}

function HotelsFilterPanel({ setQueryString, setRatings } : HotelsFilterPanelProps) {
  const title = 'Filter Results'

  return (<div className='filter-wrapper'>
    <strong>{title}</strong>
    <hr/>
    <InputSearch setQueryString={setQueryString}></InputSearch>

    <hr/>
    <RatingFilter setRatings={setRatings}></RatingFilter>

  </div>)
}

export default HotelsFilterPanel
