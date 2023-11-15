import React, { useState, useEffect } from 'react'
import HotelsList from '../hotelsList'
import HotelsFilter from '../hotelsFilter'
import { Hotel } from '../../types'
import './index.scss'

function App() {
  const [hotels, setHotels] = useState<Hotel[]>([])

  useEffect(() => {
    fetch('hotels.json')
      .then(res => res.json())
      .then(data => {
        return setHotels(data.hotels)
    })
  }, [])

  return (
    <div className='content-wrapper'>
      <div className='content'>
        <main className='main'>
          <h1>{`${hotels.length} Hotels available in Melbourne`}</h1>
          <section className='list-wrapper'>
            <div className='filter-section'>
              <HotelsFilter hotels={hotels}></HotelsFilter>
            </div>
            <HotelsList hotels={hotels}></HotelsList>
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
