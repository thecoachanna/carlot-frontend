import React,{useState} from 'react'
import axios from 'axios'
import {setToken,getUserFromPayload} from '../../utils/tokenServices'
import { useNavigate,Link } from 'react-router-dom'
import './Login.css'


const Login = ({setUser}) => {
    const navigate = useNavigate()


    const [formData, setFormData] = useState()
    const [errorMsg,setErrorMsg] = useState({})

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
                setUser(getUserFromPayload())
                navigate('/')
            }
        }).catch(err=>{
            // console.log(err)
            const res = err.response
            if(res.status === 400){
                console.log(res.data)
                setErrorMsg(res.data)
            }

        })
}



  return (
    <form onSubmit={handleSubmit} className='form'>
        <h1>Login</h1>

        {Object.entries(errorMsg).map((keyName,keyIndex) =>{
            return <span className='error'>{keyName}:{errorMsg[keyName]}</span>
        })}
        

        <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id="email" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id="password" onChange={handleChange}/>
        </div>
        
        <span>dont have an account? <Link to='/signup'>create one</Link></span>

        <input type='submit' value="Log In" />

    </form>
  )
}

export default Login