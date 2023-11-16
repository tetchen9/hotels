import React, { useState, useEffect } from 'react'
import HotelsList from '../hotelsList'
import HotelsFilterPanel from '../hotelsFilterPanel'
import { Hotel, Rating } from '../../types'
import './index.scss'
import { intersectionOfHotels } from '../utils'

function App() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([])
  const [queryString, setQueryString] = useState<string>('')
  const [ratings, setRatings] = useState<Rating[] | null>(null)

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
    if (!queryString && !ratings?.length ) {
      setFilteredHotels(hotels)
      return
    } 

    const filteredByName = queryString 
      ? hotels.filter(({ name }) => {
          return name.toLowerCase()
          .includes(queryString.toLowerCase())
        })
      : hotels

    const filteredByRating = ratings?.length 
      ? hotels.filter(({ rating }) => {
        return ratings.some(r => r === rating)
      })
      : hotels


    const filteredByAll = intersectionOfHotels(filteredByName, filteredByRating)
    setFilteredHotels(filteredByAll)

  }, [queryString, ratings, hotels])

  return (
    <div className='content-wrapper'>
      <div className='content'>
        <main className='main'>
          <h1>{`${filteredHotels.length} Hotels available in Melbourne`}</h1>
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
