import React from 'react'
import Car from './car/Car'

const Cars = ({cars}) => {
  return (
     
    cars.length === 0 
    ? 
    <div style={{margin:'30px'}}>No Car Registered!</div>
    :
    <div className="album py-5 bg-light" >
     <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        { cars.map(car => {
          return <Car car={car} key={car._id}/>            
      })}

    </div>
    </div>
    </div>

  )
}

export default Cars