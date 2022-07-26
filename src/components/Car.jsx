import React from "react";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
  return (
    <div>
      <img src={car.image} alt={car.name} />
      <h1>{car.title}</h1>
      <p>${car.price}</p>
      <Link to={`/cars/${car._id}`}>Details</Link>
    </div>
  );
};

export default Car;
