import React from "react";

const Car = ({ cars }) => {
  return (
    <div>
      {cars.map((car) => {
        return (
          <>
            <h1> {car.price} </h1>
            <p> {car.title} </p>
            <p> {car.transmission} </p>
          </>
        );
      })}
    </div>
  );
};

export default Car;
