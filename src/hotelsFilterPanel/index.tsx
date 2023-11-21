import React from 'react'
import './styles.scss'
import InputSearch from './inputSearch'
import { Rating } from '../../types'
import RatingFilter from './ratingFilter'
import Accordion from './accordion'

interface HotelsFilterPanelProps {
  setQueryString: (query: string) => void
  setRatings: (rating: Rating[]) => void
}

function HotelsFilterPanel({ setQueryString, setRatings } : HotelsFilterPanelProps) {
  const title = 'Filter Results'
  const nameFilterAccordionTitle = 'Hotel Name'
  const ratingFilterAccordionTitle = 'Quality Rating'

  return (
    <article className='filter-wrapper'>
      <h3>{title}</h3>

      <Accordion title={nameFilterAccordionTitle}>
        <InputSearch setQueryString={setQueryString}></InputSearch>
      </Accordion>

      <Accordion title={ratingFilterAccordionTitle}>
        <RatingFilter setRatings={setRatings}></RatingFilter>
      </Accordion>

    </article>
  )
}

export default HotelsFilterPanel
