import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import "./car.css";

const Car = ({ car }) => {
  const [current, setCurrent] = useState(0);

  let length = car.image.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <section className="slider">
            <BiLeftArrow className="left-arrow" onClick={prevSlide} />
            <BiRightArrow className="right-arrow" onClick={nextSlide} />

            {car.image.map((img, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "clide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={img}
                      className="bd-placeholder-img card-img-top"
                      alt={img}
                    />
                  )}
                </div>
              );
            })}
          </section>

          <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <h2>{car.make} </h2>
          </div>

          <div className="card-body">
            <p className="card-text"> Model: {car.model} </p>
            <p className="card-text">Price: ${car.price} </p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/cars/${car._id}`}>
                <button className="btn btn-sm btn-outline-secondary">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
