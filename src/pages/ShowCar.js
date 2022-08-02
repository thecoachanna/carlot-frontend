import React from 'react'
import { useParams } from 'react-router-dom';
import Review from '../components/Review';
import CarMap from '../components/CarMap';

const ShowCar = ({ cars }) => {



  let { id } = useParams()
  
  let car = cars.find(c => c._id === id)

 
  return (
    <div>
      <a href="/cars">Back</a>
      <h1>Car Details</h1>
      <h2>{car.make}</h2>
      <h2>${car.price}</h2>
      <img src={car.image} alt={car.name} /> <br/>
      <div style={{marginTop:"3rem", display:"flex", justifyContent:"center"}}>
      <CarMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `300px`, width: `400px`}} />}
      mapElement={<div style={{ height: `100%` }} />}
      carLocation ={car.location}
      /> 
      </div>
      <h3>{car.location}</h3>
      <Review  ownerId = {car.owner}/>
      
    </div>
  )
}

export default ShowCar 