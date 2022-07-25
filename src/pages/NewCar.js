import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const NewCar = ({addCar}) => {

    const initialState = {
    image: '',
    price: '',
    title: '',
    location: '',
    year: '',
    mileage: '',
    transmission: '',
    color: '',
    notes: '',
    ownerInfo: '',
   }

const navigate = useNavigate()

const [formData, setFormData] = useState(initialState)
  
const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }
  
const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:4000/cars', formData )
        .then(res =>  {
            setFormData(initialState)
            addCar(res.data)
            navigate('/', { replace: true })
        })
}

    return (
    
    <form onSubmit={handleSubmit}>
        <h1>Create New Post</h1>
        <div>
            <label htmlFor='image'>Image</label>
            <input id='image' name='image' type='text'   onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='price'>Price</label>
            <input id='price' name='price' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='title'>Title</label>
            <input id='title' name='title' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='location'>Location</label>
            <input id='location' name='location' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='year'>Year</label>
            <input id='year' name='year' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='mileage'>Mileage</label>
            <input id='mileage' name='mileage' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='transmission'>Transmission</label>
            <input id='transmission' name='transmission' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='color'>Color</label>
            <input id='color' name='color' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='notes'>Notes</label>
            <input id='notes' name='notes' type='text' onChange={handleChange} />
        </div>

        <input type='submit' value='Post Car' />

    </form>

    
  )
}

export default NewCar