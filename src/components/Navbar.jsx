import React from 'react'
// import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../utils/tokenServices'
import { getUserFromPayload } from '../utils/tokenServices'
import SearchBar from './searchBar/SearchBar'


// const NavbarContainer = styled.nav`
//     background-color: #c0ffee;
//     padding: 5px;
    
//     ul {
//         display: flex;
//         justify-content: space-evenly;
//     }

//     li {
//         list-style: none;
//     }  
// `

const Navbar = ({ setUser, setCars,searchQuery,setSearchQuery}) => {
    const navigate = useNavigate()
    const user = getUserFromPayload()

    // console.log(user.name)

    function logout(){
        setToken()
        navigate('/login')
    }

    

  return (
   
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">
        <img src="https://png.clipart.me/image_preview/2eb/sport-car-27559.png" alt="" width="120" height="72" className="d-inline-block align-text-top"></img>
    </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

      { user 
        &&
          <li className="nav-item">
            <a className="nav-link" aria-current="page">Welcome {user.name}</a>
          </li>
        } 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cars">Home</Link>
        </li>

         
        <li className="nav-item">
          <Link className="nav-link" to="/cars/new">New Listing</Link>
        </li>

        {
          user ? 
          <li className="nav-item">
            <a className="nav-link" href='#' onClick={logout}>Logout</a>
          </li>
          :
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">Signup</Link>
            </li>
          </>
          
        }
   

      </ul>
      {
        user && <SearchBar setCars={setCars} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      }

    </div>
  </div>
</nav>






  )
}

export default Navbar