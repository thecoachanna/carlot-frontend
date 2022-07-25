import React from 'react'

const Car = ({car}) => {
  return (
    <div>
        <img src={car.image} alt={car.name}/>
        <h1>{ car.title }</h1>
        <p>{ car.price}</p>

    </div>
  )
}

export default Car