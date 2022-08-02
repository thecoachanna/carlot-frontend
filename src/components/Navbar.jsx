import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'

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
    // const navigate = useNavigate()

  return (
    <NavbarContainer>
        <ul>
            <li> <Link to='/cars'> Home </Link></li>
            <li> <Link to='/cars/new'> New Listing</Link></li>
            <li> <Link to='/Welcome'> Welcome</Link></li>
            <li> <Link to='/user'> User</Link></li>
            <li> <Link to='/logout'> Logout</Link></li>
        </ul>
    </NavbarContainer>
  )
}

export default Navbar