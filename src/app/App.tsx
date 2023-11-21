import React  from 'react'
import HotelsPanel from '../hotelsPanel'
import './index.scss'

function App() {
  return (
    <div className='content-wrapper'>
      <div className='content'>
        <main className='main'>
          <HotelsPanel/>
        </main>
        <aside className='ads'>
          <img src={'ads.png'} alt='advertisement'></img>
        </aside>
      </div>
    </div>
  )
}

export default App

