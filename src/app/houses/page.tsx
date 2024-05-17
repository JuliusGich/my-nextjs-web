import React from 'react'
import HouseList from './HouseList'

export default function page() {
  return (
    <main>
   <nav>
    <div className='info-house'>
      <h2>House</h2>
      <p><small>Here are the curently houses that we have</small></p>
    </div>
    <hr></hr>
   </nav>
   <HouseList />
   </main>
  )
}
