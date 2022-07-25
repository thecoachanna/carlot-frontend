import React from 'react'
import Car from '../components/Car'

const Main = ({ cars }) => {
  return (
      <div>
          <Car car={cars} />
    </div>
  )
}

export default Main