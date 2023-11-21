import React, { useState, useEffect } from 'react'
import HotelsList from '../hotelsList'
import HotelsFilterPanel from '../hotelsFilterPanel'
import { Hotel, Rating } from '../../types'
import { filterHotelsByName, 
  filterHotelsByRating, 
  intersectionOfHotels,
} from './hotelsPanelUtils'
import './styles.scss'

const hotelsDataFileName = 'hotels.json'

function HotelsPanel() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([])
  const [queryString, setQueryString] = useState('')
  const [ratings, setRatings] = useState<Rating[]>([])

  useEffect(() => {
    fetch(hotelsDataFileName)
      .then(res => res.json())
      .then(data => {
          setHotels(data.hotels)
          setFilteredHotels(data.hotels)
      })
  }, [])

  useEffect(() => {  
    //reset filtering is there's no queries
    if (!queryString && !ratings?.length) {
      setFilteredHotels(hotels)
      return
    } 

    const filteredByName = filterHotelsByName(hotels, queryString)
    const filteredByRating = filterHotelsByRating(hotels, ratings)
    const filteredByAll = intersectionOfHotels(filteredByName, filteredByRating)
    setFilteredHotels(filteredByAll)

  }, [queryString, ratings, hotels])

  const total = filteredHotels.length
  const suffix = total === 1 ? '' : 's'
  const title = `${total} Hotel${suffix} available in Melbourne`
  
  return (<>
    <button className='mobile-menu-button'>
      Menu
    </button>
    <h1>{title}</h1>
    <section className='list-wrapper'>
      <aside className={'filter-section'}>
        <HotelsFilterPanel
          setQueryString={setQueryString}
          setRatings={setRatings}
        ></HotelsFilterPanel>
      </aside>
      <HotelsList hotels={filteredHotels}></HotelsList>
    </section>
  </>)
}

export default HotelsPanel
