import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const ShowCar = ({ cars }) => {
    
    const { id } = useParams()

    const [showCar, setShowCar] = useState()
    useEffect(() => {
        fetch(`http://localhost:4000/cars/${id}`)
            .then(res => res.json())
            .then(data => setShowCar(data))
    }, [])

    console.log(showCar)

  return (
    <div>Show Car</div>
  )
}

export default ShowCar