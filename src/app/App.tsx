import React  from 'react'
import HotelsPanel from '../hotelsPanel'
import './index.scss'

function App() {
  const mobileMenuButtonTitle = 'Menu'
  const advertisingImageFileName = 'ads.png'

  return (
    <div className='content-wrapper'>
      <button className='mobile-menu-button'>
        {mobileMenuButtonTitle}
      </button>
      <div className='content'>
        <main className='main'>
          <HotelsPanel/>
        </main>
        <aside className='ads'>
          <img src={advertisingImageFileName} alt='advertisement'></img>
        </aside>
      </div>
    </div>
  )
}

export default App

