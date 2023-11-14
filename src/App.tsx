import React, { useState, useEffect } from 'react';
import HotelsList from './hotelsList'
import { Hotel } from '../types'
import './App.scss'

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
        <h1>{`${hotels.length} Hotels available in Melbourne`}</h1>
        <main>
          <HotelsList hotels={hotels}></HotelsList>
        </main>
      </div>
    </div>
  );
}

export default App
