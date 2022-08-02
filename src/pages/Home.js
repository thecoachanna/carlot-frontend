import React,{useEffect} from 'react'
import Cars from '../components/Cars'
import SearchBar from '../components/searchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/tokenServices'

const Home = ({cars,setCars}) => {
  const navigate = useNavigate()

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