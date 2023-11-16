import React from 'react'
import './styles.scss'
import InputSearch from '../inputSearch'
import { Rating } from '../../types'
import RatingFilter from '../ratingFilter'
import Accordion from '../accordion'

interface HotelsFilterPanelProps {
  setQueryString: (query: string) => void
  setRatings: (rating: Rating[]) => void
}

function HotelsFilterPanel({ setQueryString, setRatings } : HotelsFilterPanelProps) {
  const title = 'Filter Results'

  return (
    <article className='filter-wrapper'>
      <strong>{title}</strong>

      <Accordion title="Hotel name">
        <InputSearch setQueryString={setQueryString}></InputSearch>
      </Accordion>

      <Accordion title="Quality rating">
        <RatingFilter setRatings={setRatings}></RatingFilter>
      </Accordion>

    </article>
  )
}

export default HotelsFilterPanel
