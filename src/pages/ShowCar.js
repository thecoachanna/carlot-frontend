import React ,{useEffect} from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
import Review from '../components/Review';
import CarMap from '../components/CarMap';
import { getToken } from '../utils/tokenServices';



const ShowCar = ({ cars }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (!getToken()) navigate('/login')
  }, [])

  let { id } = useParams()
  
  let car = cars.find(c => c._id === id)

 
  return (
    <div>
      <a href="/">Back</a>
      <h1>Car Details</h1>
      <h2>{car.make}</h2>
      <h2>${car.price}</h2>
      <img src={car.image} alt={car.name} /> 
      <br/>
      <CarMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
      <Review  ownerId = {car.owner}/>
      
    </div>
  )
}

export default ShowCar 