import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import {useState , useEffect } from 'react'
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/axios';



const Review = ({ownerId}) => {

//     let { id } = useParams()

    useEffect(() => {
        setAuthToken()
        axios.get(`http://localhost:4000/users/${ownerId}/reviews`)
        // console.log(res.data)
        .then(res => {
        setReviews(res.data)
        })
    },[])



    
    const [reviews, setReviews] = useState([])
    
    const addReview = (review) => {
        setReviews([...reviews, review])
        
    }

        const initialState = {
        text: ''
       
       }

// const navigate = useNavigate()

const [formData, setFormData] = useState(initialState)
  
const handleChange = (e) => {
        setFormData({text : e.target.value})
    }
  
const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setAuthToken()
        axios.post(`http://localhost:4000/users/${ownerId}/reviews`, formData )
        .then(res =>  {
            setFormData(initialState)
            addReview(res.data.text)
            
        })
}

  return (
    <div>
        
    <form onSubmit={handleSubmit}>
    <div >
            <label htmlFor='review'>Review</label>
            <input id='review' name='review' type='textarea' onChange={handleChange} />
    </div>
        <input type='submit' value='Post Review' />
    </form>
    {reviews.length === 0 ? 'No Reviews for this Seller' : (reviews.map((review) => { return <p key={review}>{review}</p>}))}
    
{/* <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Review</label>
    <input className="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div> */}

  </div>
  )
}


export default Review