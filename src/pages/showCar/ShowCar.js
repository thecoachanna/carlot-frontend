import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Review from "../../components/Review";
import CarMap from "../../components/CarMap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { getUserFromPayload } from "../../utils/tokenServices";
import "./showCar.css";
// import { setToken } from '../utils/tokenServices'

const ShowCar = ({ cars, addCar }) => {
  let { id } = useParams();
  const user = getUserFromPayload();

  let car = cars.find((c) => c._id === id) || {};

  const [currentImg, setCurrentImg] = useState(0);

  // const navigate = useNavigate()

  let length = car.image?.length;

  const nextImg = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };
  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  const updateCarState = (id) => {
    car.filter((c) => c._id !== id);
  };
  const deleteCar = (id) => {
    axios.delete(`http://localhost:4000/cars/${id}`).then((res) => {
      console.log(res);
      updateCarState(id);
    });
  };

  useEffect(() => {
    if (!car._id) {
      axios.get(`http://localhost:4000/cars/${id}`).then((res) => {
        addCar(res.data);
        console.log(res);
      });
    }
  }, [car]);
  console.log(car);

  return (
    <div>
      <a href="/cars" style={{ color: "black", marginLeft: "1rem" }}>
        Back
      </a>
      <div className="container text-center">
        <div className="row g-2">
          <div className="col-6">
            <div className="p-3 border bg-light">
              <section className="carousel">
                <IoIosArrowBack
                  className="left-arrow"
                  style={length > 1 ? { opacity: "1" } : { opacity: "0" }}
                  onClick={prevImg}
                />
                <IoIosArrowForward
                  className="right-arrow"
                  style={length > 1 ? { opacity: "1" } : { opacity: "0" }}
                  onClick={nextImg}
                />

                {car.image?.map((img, index) => {
                  return (
                    <div
                      className={
                        index === currentImg ? "slide active" : "slide"
                      }
                      key={index}
                    >
                      {index === currentImg && (
                        <img src={img} className="img-thumbnail" alt={img} />
                      )}
                    </div>
                  );
                })}
              </section>
              <div
                className="col-6"
                style={
                  length === 1
                    ? { display: "none" }
                    : { width: "inherit", display: "block" }
                }
              >
                {car.image?.map((img, index) => {
                  return (
                    <img
                      src={img}
                      key={index}
                      className={
                        index === currentImg
                          ? "img-thumbnail border border-dark"
                          : "img-thumbnail "
                      }
                      alt={img}
                      style={{ width: "20%", height: "auto" }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">
              <ul style={{ listStyleType: "none" }}>
                <h4>Vehicle Details:</h4>
                <li>Price: ${car.price}</li>
                <li>Make: {car.make}</li>
                <li>Model: {car.model}</li>
                <li>Year: {car.year}</li>
                <li>Mileage: {car.mileage}</li>
                <li>Transmission: {car.transmission}</li>
                <li>Title: {car.title}</li>
                <li>Color: {car.color}</li>
                <hr />

                {car.owner === user._id && (
                  <Link
                    to={`/cars/${car._id}/edit`}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </Link>
                )}
                {car.owner === user._id && (
                  <Link to={"/cars"}>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => deleteCar(car._id)}
                    >
                      Delete
                    </button>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">
              <h3>{car.location}</h3>
              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CarMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div style={{ height: `300px`, width: `400px` }} />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                  carLocation={car.location}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">
              <h4>Contact Seller:</h4>
              <p>Seller Info Here</p>
              {/* <p>{user.email}</p> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Review ownerId={car.owner} />
      </div>
    </div>
  );
};

export default ShowCar;
