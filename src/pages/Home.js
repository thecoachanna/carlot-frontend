import React from 'react'
import Cars from '../components/Cars'
import SearchBar from '../components/searchBar/SearchBar'

const Home = ({cars,setCars}) => {
  return (
    <div>
        <SearchBar setCars={setCars}/><br />
        <Cars cars={cars}/>
    </div>
  )
}

export default Home