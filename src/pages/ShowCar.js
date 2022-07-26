import React from 'react'
import { useParams } from 'react-router-dom';


const ShowCar = ({ cars }) => {

  let { id } = useParams()
  
  let car = cars.find(c => c._id === id)
 
  return (
    <div>
      <a href="/">Back</a>
      <h1>Car Details</h1>
      <h2>{car.title}</h2>
      <h2>${car.price}</h2>
      <img src={car.image} alt={car.name} />
    </div>
  )
}

export default ShowCar