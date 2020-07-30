import React, { useState, useEffect, useRef, useContext } from "react";
import Input from "../../components/Form/Input";
import { Rating, TextArea, FormBtn } from "../Form";
import ReviewPost from "./ReviewPost";
import API from "../../utils/API";
import AUTH from "../../utils/AUTH";
import "../../App.css";
import LocationSearch from "../LocationSearch/locSearch";
import placesAPI from "../../utils/placesAPI";
import UserLocationContext from "../../utils/UserLocationContext";

const Review = (props) => {
  const userLocation = useContext(UserLocationContext);

  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
  });
  const [showModal, setModal] = useState(false);
  const [formObject, setFormObject] = useState({
    title: "",
    message: "",
    rating: 0,
    location: "",
  });
  const [reviewRating, setRatings] = useState(0);
  const formEl = useRef(null);
  const [reviews, setReviews] = useState([]);

  const [locationState, setLocationState] = useState({
    location: "",
    place: "",
    showButtons: true,
    myCoords: {
      lat: userLocation.coords.lat,
      long: userLocation.coords.long,
    },
    locationCoords: {
      lat: 0,
      long: 0,
    },
  });

  useEffect(() => {
    AUTH.getUser()
      .then((res) => {
        const { userName, firstName, lastName } = res.data.user;
        setUser({ userName, firstName, lastName });
        return loadReviews();
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("reviews: ", reviews);
  }, [reviews]);

  // Handles updating component state when the user types into the input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  //handling the location search
  const handlePlaceSubmit = (event) => {
    event.preventDefault();

    //fetching locations that match user input from the places API, setting to location in state
    placesAPI
      .getPlace(formObject.location, locationState.myCoords)
      .then((res) => {
        console.log(res.data.items);
        setLocationState({
          ...locationState,
          location: res.data.items,
          showButtons: true,
        });
      });
  };

  const handleLocClick = (event) => {
    event.preventDefault();

    let selection = event.target.value;

    let latitude = event.target.dataset.latitude;
    let longitude = event.target.dataset.longitude;
    console.log("longitude:", longitude);

    console.log("latitude:", latitude);

    console.log("Selection: ", selection);

    setLocationState({
      ...locationState,
      place: selection,
      showButtons: false,
      locationCoords: {
        lat: latitude,
        long: longitude,
      },
    });
  };

  const loadReviews = () => {
    API.getReviews()
      .then((res) => {
        return setReviews(res.data);
      })
      .catch((err) => console.log("err ", err));
  };

  const handleRatingChange = (rating) => {
    setRatings(rating);
    setFormObject({ ...formObject, rating: rating });
  };

  const time = new Date();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formObject.title && formObject.location) {
      console.log("formObject: ", formObject);
      API.saveReview({
        reviewOwner: user.userName,
        reviewCreated: time.toLocaleString(),
        reviewTitle: formObject.title,
        reviewBody: formObject.message,
        reviewRating: formObject.rating,
        reviewLocation: formObject.location,
        reviewLat: locationState.locationCoords.lat,
        reviewLong: locationState.locationCoords.long,
        reviewGeoLocation: [
          locationState.locationCoords.lat,
          locationState.locationCoords.long,
        ],
        reviewComments: [],
      })
        .then((res) => {
          formEl.current.reset();
          setRatings(0);
          setFormObject({ rating: 0 });
          closeReviewForm();
          loadReviews();
        })
        .catch((err) => console.log(err));
    }
  };

  const showReviewForm = () => {
    setModal(true);
  };

  const closeReviewForm = () => {
    setModal(false);
  };

  return (
    <>
      <div
        className={showModal ? "is-active modal" : "modal"}
        id="review-modal"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="form">
            <h2>Write a Review</h2>
            <form ref={formEl}>
              <Input
                name="title"
                title="Title"
                type="input"
                setFormObject={setFormObject}
                formObject={formObject}
                value={formObject.title}
                placeholder="Title (required)"
              />
              <TextArea
                name="message"
                title="Message"
                setFormObject={setFormObject}
                formObject={formObject}
                value={formObject.message}
                placeholder="Message"
              />
              <Rating
                name="rating"
                reviewRating={reviewRating}
                handleRatingChange={handleRatingChange}
              />
              <LocationSearch
                type="text"
                name="location"
                title="Location"
                placeholder="Location (required)"
                onChange={handleInputChange}
                value={formObject.location}
                locationState={locationState}
                handleInputChange={handleInputChange}
                handlePlaceSubmit={handlePlaceSubmit}
                handleLocClick={handleLocClick}
              />
              <FormBtn
                disabled={!(formObject.title && formObject.location)}
                onClick={handleSubmit}
              >
                Submit Review
              </FormBtn>
            </form>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={closeReviewForm}
        ></button>
      </div>
      <div className="review-posts">
        {reviews.map((post, index) => {
          return <ReviewPost key={index} post={post} />;
        })}
      </div>
      <div className="review-button">
        <button
          href="review"
          className="button is-link"
          onClick={showReviewForm}
        >
          Write a Review
        </button>
      </div>
    </>
  );
};

export default Review;
