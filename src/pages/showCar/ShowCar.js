import React from 'react'
import { useParams } from 'react-router-dom';
import Review from '../../components/Review';
import CarMap from '../../components/CarMap';
import './showCar.css'

const ShowCar = ({ cars, user }) => {

  let { id } = useParams()
  
  let car = cars.find(c => c._id === id)
  console.log(car)
  console.log(user)
  return (
    <div>
      <a href="/cars">Back</a>
      {/* <h2>{car.make}</h2>
      <h2>${car.price}</h2>
      <img src={car.image[0]} alt={car.make}/>
    
      
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
      <Review  ownerId = {car.owner}/> */}

     

      <div className="container text-center">
  <div className="row g-2">
    <div className="col-6">
      <div className="p-3 border bg-light"><img src={car.image[0]}  class="img-thumbnail" alt={car.make}/></div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
        <ul style={{listStyleType:"none"}}>
          <h4>Vehicle Details:</h4>
          <li>Price: ${car.price}</li>
          <li>Make: {car.make}</li>
          <li>Model: {car.model}</li>
          <li>Year: {car.year}</li>
          <li>Mileage: {car.mileage}</li>         
          <li>Transmission: {car.transmission}</li>
          <li>Title: {car.title}</li>
          <li>Color: {car.color}</li>
          <br/>
          <br/>
          <br/>
          <br/>
          <hr/>
          <button className="btn btn-sm btn-outline-secondary">Save to Favorite</button>
          
        </ul>
      </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
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
      </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
      <h4>Contact Seller:</h4>
      {/* <p>{user.email}</p> */}
      </div>
    </div>
  </div>
</div>
      
      
    </div>




  )
}

export default ShowCar 