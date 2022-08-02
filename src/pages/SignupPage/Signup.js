import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import {setToken, getUserFromPayload} from '../../utils/tokenServices'



const Signup = ({setUser}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState()
    const [errorMsg,setErrorMsg] = useState({})

    const handleChange =(e) => {
        setFormData({...formData, [e.target.id] :e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/auth/signup', formData)
        .then(res =>{
            if(res.status === 200){
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
        <form onSubmit={handleSubmit} className="form">
            <h1>Signup</h1>

            {Object.entries(errorMsg).map((keyName,keyIndex) =>{
            return <span className='error'>{keyName}:{errorMsg[keyName]}</span>
             })}
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='name' id="email" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id="pass1" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Confirm Password</label>
                <input type='password' name='password' id="pass2" onChange={handleChange}/>
            </div>
            <input type='submit' value="Sign Up" />

        </form>
    )
}

export default Signup