import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import setAuthToken from "../utils/axios";

const Review = ({ ownerId }) => {
  useEffect(() => {
    setAuthToken();
    axios.get(`http://localhost:4000/users/${ownerId}/reviews`)
      // console.log(res.data)
      .then(res => {
        setReviews(res.data);
      });
  }, []);

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const initialState = {
    text: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setAuthToken();
    axios.post(`http://localhost:4000/users/${ownerId}/reviews`, formData)
      .then(res => {
        setFormData(initialState);
        addReview(res.data.text);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ width: "70%", marginLeft: "15%" }}>
          <label htmlFor="review" style={{ marginTop: "2rem" }}>
            Seller Review
          </label>
          <textarea
            id="review"
            name="review"
            className="form-control"
            onChange={handleChange}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Post Review"
          className="btn btn-sm btn-outline-secondary"
          style={{ marginLeft: "15%", marginBottom: "2rem" }}
        />
      </form>

      {reviews.length === 0
        ? <p style={{ marginLeft: "15%" }}>No Reviews for this Seller</p>
        : reviews.map((review) => {
            return (
              <figure
                className="form-control"
                style={{ width: "70%", marginLeft: "15%" }}
              >
                <blockquote className="blockquote">
                  <p key={review._id}>{review}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  {/* {user.name}  */}
                  {/* <cite title="Source Title">Source Title</cite> */}
                </figcaption>
              </figure>
            );
          })}
    </div>
  );
};

export default Review;
