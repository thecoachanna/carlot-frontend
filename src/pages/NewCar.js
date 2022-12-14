import React, { useState, useEffect } from "react";
import axios, { Axios, AxiosError } from "axios";
import { useNavigate , useParams } from "react-router-dom";
import setAuthToken from "../utils/axios";
import { getToken } from "../utils/tokenServices";
import PlacesAutocomplete from "react-places-autocomplete";
// import { Image } from 'cloudinary-react';
import "./NewCar.css";


const NewCar = ({ addCar ,setCars, edit}) => {


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
  const [address, setAddress] = useState("");
  const [formData, setFormData] = useState(initialState)
  let { id } = useParams()

  const handleInput = (value) => {
    setAddress(value);
  };

  const handleSelect = (value) => {
    setAddress(value);
  };


  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) navigate("/login");
    if(edit){
      axios.get(`http://localhost:4000/cars/${id}`)
      .then(res =>{
        setFormData(res.data)
        setAddress(res.data.location)

      })
    }
  }, []);


  const handleChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.value, location: address });
  };

  const handlePhoto = (e) => {
    setFormData({ ...formData, photos: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {...formData,location:address}
    console.log(formData);
    setAuthToken();
    axios
      .post("http://localhost:4000/cars", newData, {
        header: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setFormData(initialState);
        addCar(res.data);
        navigate("/cars", { replace: true });
      });
  };
  

const handlePutSubmit = (e) =>{
    e.preventDefault()
    const newData = {...formData,location:address}
    setAuthToken()
    axios.put(`http://localhost:4000/cars/${id}`, newData )
    .then(res =>  {
        setFormData(initialState)
        setCars(res.data)
        navigate(`/cars/${id}`, { replace: true })
    })
}


  return (
    <div className="NewCar">
      <div className="NewForm col-6 offset-3 p-2">
        <form onSubmit={edit ? handlePutSubmit : handleSubmit} >
          {
            
            edit ? <h1 className="text-center mb-3">Edit Car</h1>
            : <h1 className="text-center mb-3">Create a new listing.</h1>
          }
          <div className="mb-3 text-center">
            <input
              id="make"
              name="make"
              placeholder="Make"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={formData?.make}
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
              value={formData?.model}
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
              value={formData?.price}
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
              value={formData?.title}
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

                {/* <label htmlFor="location">Location </label> */}
                <input {...getInputProps({placeholder:"Location"})} className="form-control mb-3"/>
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
              value={formData?.year}
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
              value={formData?.mileage}
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
              value ={formData?.transmission}
            >
              <option defaultValue>Select Transmission...</option>
              <option value="automatic">Automatic</option>
              <option value="manual" >Manual</option>
              
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
              value={formData?.color}
              
            />
          </div>
          <div className="form-floating mb-3 text-center">
            <textarea
              id="notes"
              name="notes"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={formData?.notes}
            ></textarea>
            <label htmlFor="floatingTextarea">
              Tell us more about your car...
            </label>
          </div>
          {
            !edit &&
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
          }
          

          <div className="col-auto mb-3">
            <button
              type="submit"
              value="Post Car"
              className="btn btn-primary"
              
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCar;
