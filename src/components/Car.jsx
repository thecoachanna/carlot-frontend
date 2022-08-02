import React from "react";
import { Link } from "react-router-dom";


const Car = ({ car }) => {

  return (
    <div>
      <img src={car.image} alt={car.model} />   
      <h1>{car.make}</h1>
      <h2>{car.model}</h2>
      <p>${car.price}</p>
      <Link to={`/cars/${car._id}`}>Details</Link>
    </div>
  );
};

export default Car;
