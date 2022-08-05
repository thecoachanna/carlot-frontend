import React,{useEffect} from 'react'
import Cars from '../components/Cars'
import SearchBar from '../components/searchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/tokenServices'
import axios from 'axios'
import setAuthToken from '../utils/axios'

const Home = ({cars,setCars,searchQuery,getSearchQuery}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!getToken()){
      navigate('/login')
    }else {
      setAuthToken()
      axios.get(`http://localhost:4000/cars/?search=${getSearchQuery()}`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err.response.data))
    }
  }, [])

  
  
  return (
    <div>
        
        <Cars cars={cars}/>
    </div>
  )
}

export default Home