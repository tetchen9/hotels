import React, { useState, useEffect } from 'react'
import HotelsList from '../hotelsList'
import HotelsFilter from '../hotelsFilter'
import { Hotel } from '../../types'
import './index.scss'

function App() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([])
  const [queryString, setQueryString] = useState<string>('')

  useEffect(() => {
    fetch('hotels.json')
      .then(res => res.json())
      .then(data => {
        return setHotels(data.hotels)
    })
  }, [])

  useEffect(() => {
    if (!queryString) {
      return
    }
    const filteredHotels = hotels.filter(({ name }) => {
      return name.toLowerCase()
        .includes(queryString.toLowerCase())
    })
    setFilteredHotels(filteredHotels)
  }, [queryString, hotels])

  return (
    <div className='content-wrapper'>
      <div className='content'>
        <main className='main'>
          <h1>{`${hotels.length} Hotels available in Melbourne`}</h1>
          <section className='list-wrapper'>
            <div className='filter-section'>
              <HotelsFilter setQueryString={setQueryString}></HotelsFilter>
            </div>
            <HotelsList hotels={queryString ? filteredHotels : hotels}></HotelsList>
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
