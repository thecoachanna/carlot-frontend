import React from 'react'
import { useParams } from 'react-router-dom';
import Review from '../../components/Review';
import CarMap from '../../components/CarMap';
// import './showCar.css'

const ShowCar = ({ cars }) => {



  let { id } = useParams()
  
  let car = cars.find(c => c._id === id)

 
  return (
    <div>
      <a href="/cars">Back</a>
      <h2>{car.make}</h2>
      <h2>${car.price}</h2>
      {/* <img src={car.image} alt={car.name} /> <br/> */}

{/* image carousel starts here */}
<div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {car.image.map((img) => {
                return (
                  <div className="carousel-item active">
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={img}
                    />
                  </div>
                );
              })}
            </div>
            <button 
            id={car._id}
              className="carousel-control-prev"
              // type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
{/* image carousel ends here */}

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