import React, {useEffect, useState} from 'react'
import { GoogleMap , withScriptjs, withGoogleMap, Marker } from "react-google-maps" 
import Geocode from 'react-geocode'


Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage('en');

const CarMap = withScriptjs(withGoogleMap( ({carLocation}) => {


 const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })
  
useEffect (() =>{
  Geocode.fromAddress(carLocation).then(
    (response) => {
      const mapCenter = response.results[0].geometry.location;
      setCoordinates(mapCenter)      
      return coordinates
    },
    (error) => {
      console.error(error);
    }
  )
}, []);


return (
  <div> 
    {coordinates?.lat && <GoogleMap defaultZoom={11} defaultCenter={{lat: coordinates.lat, lng: coordinates.lng}}>
    <Marker position={{lat: coordinates.lat, lng: coordinates.lng}}/>
    </GoogleMap>}
  </div>
  )
}))

export default CarMap