import React from 'react'
import Car from './Car'

const Cars = ({cars}) => {
  return (
     
    cars.length === 0 
    ? 
    <div style={{margin:'30px'}}>No Car Registered!</div>
    :
    <div>
        { cars.map(car => {
          return <Car car={car} />
            
      })}

    </div>
  )
}

export default Cars