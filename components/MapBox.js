import React from 'react'
import Map from './Map'

const MapBox = () => {
  return (
    <div className='p-3 ml-2'>
        <h2 className='text-3xl font-semibold mb-3'>Currently You're Here</h2>
        <Map/>
    </div>
  )
}

export default MapBox