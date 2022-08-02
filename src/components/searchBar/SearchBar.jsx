import React, {useState} from 'react'
import './searchBar.css'
import axios from 'axios'
import { getToken } from '../../utils/tokenServices'


const SearchBar = ({setCars}) => {

  const [ search,setSearch]=useState('')

  const handleChange = (e) =>{
    setSearch(e.target.value)

  }

  const searchButtonHandler = () =>{
    const headers = {'Authorization': 'Bearer ' + getToken()}
    axios.get(`http://localhost:4000/cars/?search=${search}`,{headers})
    .then(res => {
      setCars(res.data)


    })

  }
  return (
    <div className="wrap">
        <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={handleChange}/>
            <button type="submit" className="searchButton" onClick={searchButtonHandler}>
              <i className="fa fa-search"></i>
            </button>
        </div>
     </div>
    
  )
}

export default SearchBar