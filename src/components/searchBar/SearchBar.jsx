import React, {useState} from 'react'
import './searchBar.css'
import axios from 'axios'
import setAuthToken from '../../utils/axios'


const SearchBar = ({setCars}) => {

  const [ search,setSearch]=useState('')

  const handleChange = (e) =>{
    setSearch(e.target.value)

  }

  const searchButtonHandler = () =>{
    setAuthToken()
    axios.get(`http://localhost:4000/cars/?search=${search}`)
    .then(res => {
      setCars(res.data)
    })

  }
  return (
    <div className="wrap">
       {/*  <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={handleChange}/>
            <button type="submit" className="searchButton" onClick={searchButtonHandler}>
              <i className="fa fa-search"></i>
              </button> */}

              <div className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}></input>
        <button className="btn btn-outline-success" type="submit" onClick={searchButtonHandler}>Search</button>
      </div>
            
        </div>
   /*   </div> */
    
  )
}

export default SearchBar