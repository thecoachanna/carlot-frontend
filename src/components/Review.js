import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
// import { useParams } from 'react-router-dom';
import axios from 'axios';



const Review = ({ownerId}) => {

//     let { id } = useParams()
    
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
            <input id='review' name='review' type='text' onChange={handleChange} />
    </div>
        <input type='submit' value='Post Review' />
    </form>
    {reviews.length === 0 ? 'No Reviews for this Seller' : (reviews.map((review) => { return <p>{review}</p>}))}
    </div>
  )
}


export default Review
