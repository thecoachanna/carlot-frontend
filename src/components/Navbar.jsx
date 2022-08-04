import React from 'react'
import styled from 'styled-components'
import { Link,useNavigate } from 'react-router-dom'
import { setToken } from '../utils/tokenServices'
import { getUserFromPayload } from '../utils/tokenServices'


const NavbarContainer = styled.nav`
    background-color: #c0ffee;
    padding: 5px;
    
    ul {
        display: flex;
        justify-content: space-evenly;
    }

    li {
        list-style: none;
    }
    
`

const Navbar = ({ setUser}) => {
    const navigate = useNavigate()
    const user = getUserFromPayload()

    function getName(){
        return user.email.split('@')[0]
    }

    console.log(user)

    function logout(){
        setToken()
        navigate('/login')

    }

  return (
   /*  <NavbarContainer>
        <ul>
            { user && <li><span>Welcome {getName()}</span></li> }
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/newcar'> New Listing</Link></li>
            <li><Link to='/Welcome'></Link></li>

    
            {
                user ?  
                <li><a href='#' onClick={logout}>Logout</a></li> 
                : 
                <li> <Link to='/login'>Login</Link></li>
            }
        </ul>
    </NavbarContainer>
 */
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
        <img src="https://png.clipart.me/image_preview/2eb/sport-car-27559.png" alt="" width="120" height="72" class="d-inline-block align-text-top"></img>
    </a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/newcar">New Listing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Signup">Signup</a>
        </li>
    
        <li class="nav-item">
            <a class="nav-link" href='#' onClick={logout}>Logout</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>






  )
}

export default Navbar