import React from 'react'
import styled from 'styled-components'
import { Link,useNavigate } from 'react-router-dom'
import { setToken } from '../utils/tokenServices'


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

const Navbar = ({user, setUser}) => {
    const navigate = useNavigate()

    function logout(){
        setToken()
        navigate('/login')

    }

  return (
    <NavbarContainer>
        <ul>
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/newcar'> New Listing</Link></li>
            <li> <Link to='/Welcome'> Welcome</Link></li>
            <li> <Link to='/user'> User</Link></li>
            <li><a href='#' onClick={logout}>Logout</a></li>
        </ul>
    </NavbarContainer>
  )
}

export default Navbar