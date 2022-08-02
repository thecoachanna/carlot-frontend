import React, {useState} from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.css'
import {setToken} from '../../utils/tokenServices'



const Login = ({setUser}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState()

    const handleChange =(e) => {
        setFormData({...formData, [e.target.id] :e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/auth/login', formData)
        .then(res =>{
            console.log(res)
            if(res.status === 200){
                console.log(res.data.access)
                setToken(res.data.access)
                
                // setUser(res.data)
                // navigate('/')
            }
        })
}

  return (
    <form onSubmit={handleSubmit} className='form'>
        <h1>Login</h1>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id="email" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id="password" onChange={handleChange}/>
        </div>
        <input type='submit' value="Log In" />

    </form>
  )
}

export default Login