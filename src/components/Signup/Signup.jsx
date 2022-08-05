import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
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
                navigate('/cars')
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

        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
                <div className="custom-control custom-checkbox text-center l">
                    <span className="custom-control-label ">
                        Welcome to Car Lot!<br /> A privately owned and sold used car app. <br/>
                    </span>
                </div>
 

                <div className="mb-3">
                  <label>Email Address</label>
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
                  <label>First Name</label>
                  <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        id="name"
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
                        id="pass1"
                        onChange = {handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Repeat password"
                        id="pass2"
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
                Already have an aacount?<Link to="/login">Login</Link>
            </p>
      </form>
    )
}

export default Signup