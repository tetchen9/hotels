import React, { useState, useEffect } from 'react'
import HotelsList from '../hotelsList'
import HotelsFilterPanel from '../hotelsFilterPanel'
import { Hotel, Rating } from '../../types'
import { filterHotelsByName, 
  filterHotelsByRating, 
  intersectionOfHotels 
} from '../utils'
import './index.scss'

function App() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([])
  const [queryString, setQueryString] = useState<string>('')
  const [ratings, setRatings] = useState<Rating[]>([])

  useEffect(() => {
    fetch('hotels.json')
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

  return (
    <div className='content-wrapper'>
      <div className='content'>
        <main className='main'>
          <h1>{title}</h1>
          <section className='list-wrapper'>
            <div className='filter-section'>
              <HotelsFilterPanel 
                setQueryString={setQueryString}
                setRatings={setRatings}
              ></HotelsFilterPanel>
            </div>
            <HotelsList hotels={filteredHotels}></HotelsList>
          </section>
        </main>
        <aside className='ads'>
          <img src={'ads.png'} alt="advertisement"></img>
        </aside>
      </div>
    </div>
  )
}

export default App
