import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import setAuthToken from '../utils/axios'
import { getToken } from '../utils/tokenServices'


const NewCar = ({addCar}) => {

    const initialState = {
    
    price: '',
    title: '',
    location: '',
    mileage: '',
    transmission: '',
    color: '',
    notes: '',
    ownerInfo: '',
    photo: '',
   }

   const navigate = useNavigate()

  useEffect(() => {
    if (!getToken()) navigate('/login')
  }, [])

const [formData, setFormData] = useState(initialState)
  
const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
}
    
const handlePhoto = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] })
    console.log(formData.photo)
}
  
const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setAuthToken()
        axios.post('http://localhost:4000/cars', formData )
        .then(res =>  {
            setFormData(initialState)
            addCar(res.data)
            navigate('/', { replace: true })
        })
}

    return (
    
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <h1>Create New Post</h1>
        
        <div>
            <label htmlFor='price'>Price </label>
            <input id='price' name='price' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='title'>Title </label>
            <input id='title' name='title' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='location'>Location </label>
            <input id='location' name='location' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='year'>Year </label>
            <input id='year' name='year' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='mileage'>Mileage </label>
            <input id='mileage' name='mileage' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='transmission'>Transmission </label>
            <input id='transmission' name='transmission' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='color'>Color </label>
            <input id='color' name='color' type='text' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='notes'>Notes </label>
            <input id='notes' name='notes' type='text' onChange={handleChange} />
            </div>
        <div>
            <label htmlFor='file'>Photo </label>
            <input id='photo' name='photo' type='file' accept='.png, .jpg, .jpeg' onChange={handlePhoto} />
        </div>

        <input type='submit' value='Post Car' />

    </form>

    
  )
}

export default NewCar