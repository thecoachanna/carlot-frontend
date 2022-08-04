import React,{useEffect} from 'react'
import Cars from '../components/Cars'
import SearchBar from '../components/searchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/tokenServices'
import axios from 'axios'
import setAuthToken from '../utils/axios'

const Home = ({cars,setCars}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!getToken()){
      navigate('/login')
    }else {
      setAuthToken()
      axios.get('http://localhost:4000/cars/')
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err.response.data))
    }
  }, [])

  useEffect(() => {
    if (!getToken()) navigate('/login')
  })
  
  return (
    <div>
        <SearchBar setCars={setCars}/><br />
        <Cars cars={cars}/>
    </div>
  )
}

export default Home