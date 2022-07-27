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
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/newcar'> New Listing</Link></li>
        </ul>
    </NavbarContainer>
  )
}

export default Navbar