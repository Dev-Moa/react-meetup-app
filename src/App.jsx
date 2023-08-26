import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
import Navbar from './components/Layout/Navbar'
function App() {
  return (
    <div >
      <Navbar />
      <div className='px-[15%]   py-[3%]'>
        <Routes>
          <Route path='/' element={<AllMeetups />} />
          <Route path='new/' element={<NewMeetup />} />
          <Route path='favs/' element={<Favorites />} />
        </Routes>
      </div>
    </div>
  )
}

export default App