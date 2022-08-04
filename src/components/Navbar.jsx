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
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src="https://png.clipart.me/image_preview/2eb/sport-car-27559.png" alt="" width="120" height="72" class="d-inline-block align-text-top"></img>
    </a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav"> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/cars">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Signup">Signup</a>
        </li>
      <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/newcar">New Listing</a>
        </li>
        
    
        <li className="nav-item">
            <a className="nav-link" href='#' onClick={logout}>Logout</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>






  )
}

export default Navbar