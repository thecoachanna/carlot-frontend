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
            // console.log(res)
            if(res.status === 200){
                // console.log(res.data.access)
                setToken(res.data.access)
                setUser(getUserFromPayload())
                navigate('/cars')
            }
        }).catch(err=>{
            // console.log(err)
            const res = err.response
            if(res.status === 400){
                // console.log(res.data)
                setErrorMsg(res.data)
            }

        })
}



  return (
    

    <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
                onChange = {handleChange}
                required
            />
            </div>
            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="password"
                onChange = {handleChange}
                required
            />
            </div>

            <div className="mb-3 text-center">
            <div className="custom-control custom-checkbox">
                {Object.entries(errorMsg).map((keyName,keyIndex) =>{
                    return <label className="custom-control-label text-danger">{keyName[1]}</label>
                })}
                
            </div>
            </div>
        
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </div>
            <p className="forgot-password text-right">
             Don't have an account?<Link to="/signup">Create one</Link>
            </p>
      </form>
  )
}


export default Login