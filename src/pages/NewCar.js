import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/tokenServices";
import "./NewCar.css";



import setAuthToken from '../utils/axios'

const NewCar = ({ addCar }) => {
  const initialState = {
    make: "",
    model: "",
    price: "",
    title: "",
    location: "",
    mileage: "",
    transmission: "",
    color: "",
    notes: "",
    ownerInfo: "",
    photo: "",
  };

  const navigate = useNavigate();

 

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   const headers = { Authorization: "Bearer " + getToken() };
  //   axios
  //     .post("http://localhost:4000/cars", formData, { headers })
  //     .then((res) => {
  //       setFormData(initialState);
  //       addCar(res.data);
  //       navigate("/", { replace: true });
  //     });
  // };

  return (
    <body className="NewCar">
      <div className="NewForm col-6 offset-3 p-2">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1 className="text-center mb-3">Create a new listing.</h1>
          <div className="mb-3 text-center">
            <input
              id="make"
              name="make"
              placeholder="Make"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-center">
            <input
              id="model"
              name="model"
              placeholder="Model"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-center">
            <input
              id="price"
              name="price"
              placeholder="Price"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-center">
            <input
              id="title"
              name="title"
              placeholder="Car Title"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-center">
            <input
              id="location"
              name="location"
              placeholder="Location"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-center">
            <input
              id="year"
              name="year"
              placeholder="Year"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-center">
            <input
              id="mileage"
              name="mileage"
              placeholder="Mileage"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-center">
            <label class="visually-hidden" for="specificSizeSelect">
              Preference
            </label>
            <select
              id="transmission"
              name="transmission"
              placeholder="Transmission"
              type="text"
              className="form-select"
              onChange={handleChange}
            >
              <option selected>Select Transmission...</option>
              <option value="1">Automatic</option>
              <option value="2">Manual</option>
            </select>
          </div>
          <div className="mb-3 text-center">
            <input
              id="color"
              name="color"
              placeholder="Color"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-floating mb-3 text-center">
            <textarea
              id="notes"
              name="notes"
             
              type="text"
              className="form-control"
              onChange={handleChange}
            ></textarea>
            <label for="floatingTextarea">Tell us more about your car:</label>
          </div>
          <div className="mb-3 text-center">
            <input
              id="photo"
              name="photo"
              type="file"
              accept=".png, .jpg, .jpeg"
              className="form-control"
              onChange={handlePhoto}
            />
          </div>

          <div class="col-auto mb-3">
            <button type="submit" value="Post Car" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default NewCar;
