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
    <NavbarContainer>
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
  )
}

export default Navbar