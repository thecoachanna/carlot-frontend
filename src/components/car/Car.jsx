import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import "./car.css";

const Car = ({ car }) => {

  const [currentImg, setCurrentImg] = useState(0);

  let length = car.image.length;

  const nextImg = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };
  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <section className="carousel">
            < IoIosArrowBack className="left-arrow" style={length>1 ?{ opacity:"1" } : {opacity:"0"}} onClick={prevImg}/>
            <IoIosArrowForward className="right-arrow" style={length>1 ?{ opacity:"1" } : {opacity:"0"}} onClick={nextImg} />
            {car.image.map((img, index) => {
              return (
                <div 
                className={index === currentImg ? 'slide active' : 'slide'}
                key={index}>
                  {index === currentImg && (
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

          <div style={{ textAlign: "center", marginTop: "0.5rem"}}>
            <h2 style={{marginBlockEnd:"0"}}>{car.make}</h2>
          </div>
          <div className="card-body" >
            <p className="card-text"> Model: {car.model} </p>
            <p className="card-text">Price: ${car.price} </p>
            <p className="card-text">Year: {car.year} </p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/cars/${car._id}`}>
                <button className="btn btn-sm btn-outline-secondary mt-3" >
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
