import React, {useState, useEffect} from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import {setToken,getUserFromPayload,getToken} from '../../utils/tokenServices'
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