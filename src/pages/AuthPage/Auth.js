import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import {getToken} from '../../utils/tokenServices'
import Login from '../../components/Login/Login'
import Signup from '../../components/Signup/Signup'




const Auth = ({setUser,page}) => {
    const navigate = useNavigate()
    

    useEffect(() => {
        if (getToken()) navigate('/')
    }, [])

    

  return (
    <div>
      {page === 'login' ? <Login setUser={setUser}/> : <Signup setUser={setUser}/>} 

    </div>
    
    
   
  )
}

export default Auth