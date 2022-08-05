import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import setAuthToken from "../utils/axios";
import { getToken } from "../utils/tokenServices";
import PlacesAutocomplete from "react-places-autocomplete";

const NewCar = ({ addCar }) => {
  const [address, setAddress] = useState("");

  const handleInput = (value) => {
    setAddress(value);
  };

  const handleSelect = (value) => {
    setAddress(value);
  };

  const initialState = {
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

  useEffect(() => {
    if (!getToken()) navigate("/login");
  }, []);


const [formData, setFormData] = useState(initialState)
  
const handleChange = (e) => {
        // console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
}
    
const handlePhoto = (e) => {
    setFormData({ ...formData, photos: e.target.files })
   
}
  

const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)
        setAuthToken()
        axios.post('http://localhost:4000/cars', formData, {header: {'Content-Type' : 'multipart/form-data'}} )
        .then(res =>  {
            setFormData(initialState)
            addCar(res.data)
            navigate('/cars', { replace: true })
        })
}


  return (
    <div className="NewCar">
      <div className="NewForm col-6 offset-3 p-2">
        <form onSubmit={handleSubmit} >
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
          <PlacesAutocomplete
            value={address}
            onChange={handleInput}
            onSelect={handleSelect}
            id="location"
            name="location"
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div>
                <label htmlFor="location">Location </label>
                <input {...getInputProps()} />
                <div>
                  {suggestions.map((suggestion) => {
                    const style = suggestion.active
                      ? { backgroundColor: "#ECF0F1", cursor: "pointer" }
                      : { backgroundColor: "#FFFFFF", cursor: "pointer" };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
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
            <label className="visually-hidden" htmlFor="specificSizeSelect">
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
              <option defaultValue>Select Transmission...</option>
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
            <label htmlFor="floatingTextarea">
              Tell us more about your car:
            </label>
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

          <div className="col-auto mb-3">
            <button type="submit" value="Post Car" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default NewCar;
