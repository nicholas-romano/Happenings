import React, { useState, useRef, useContext } from "react";
import Input from "../../components/Form/Input";
import { Rating, TextArea, FormBtn } from "../Form";
import FriendsFeed from "./FriendsFeed";
import AllUsersFeed from "./AllUsersFeed";
import "../../App.css";
import LocationSearch from "../LocationSearch/locSearch";
import placesAPI from "../../utils/placesAPI";
import UserLocationContext from "../../utils/UserLocationContext";
import UserInfoContext from "../../utils/UserInfoContext";
import API from "../../utils/API";

const styles = {
  revBtn: {
    backgroundColor: "rgba(42, 45, 52, 1)",
  },
};

const Review = (props) => {

  const userProps = useContext(UserInfoContext);
  //console.log('userProps in Reviews: ', userProps);  

  const {
    reviewsData,
    loadReviews
  } = props;

  const userLocation = useContext(UserLocationContext);
  //console.log("props review: ", props);

  const [showModal, setModal] = useState(false);

  const [reviewRating, setRatings] = useState(0);
  const formEl = useRef(null);

  const titleRef = useRef();
  const messageRef = useRef();
  const placeRef = useRef();

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

  //handling the location search
  const handlePlaceSubmit = (event) => {
    event.preventDefault();

    //fetching locations that match user input from the places API, setting to location in state
    placesAPI.getPlace(placeRef.current.value, userLocation.coords).then((res) => {
      //console.log(res.data.items);
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
    //console.log("longitude:", longitude);
    //console.log("latitude:", latitude);
    //console.log("Selection: ", selection);

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

  const handleRatingChange = rating => {
    setRatings(rating);
  };

  const time = new Date();

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;

    if (title !== '' && locationState.place) {
      //console.log("formObject: ", formObject);
      API.saveReview({
        reviewOwner: userProps.userName,
        reviewCreated: time.toLocaleString(),
        reviewTitle: titleRef.current.value,
        reviewBody: messageRef.current.value,
        reviewRating: reviewRating,
        reviewLocation: locationState.place,
        reviewLat: locationState.locationCoords.lat,
        reviewLong: locationState.locationCoords.long,
        reviewGeoLocation: [
          locationState.locationCoords.lat,
          locationState.locationCoords.long,
        ],
        reviewComments: []
      })
        .then((res) => {
          formEl.current.reset();
          titleRef.current.value = '';
          messageRef.current.value = '';
          setRatings(0);
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
                inputRef={titleRef}
                placeholder="Title (required)"
              />
              <TextArea
                name="message"
                title="Message"
                inputRef={messageRef}
                placeholder="Message"
              />
              <Rating
                name="rating"
                reviewRating={reviewRating}
                handleRatingChange={handleRatingChange}
              />
              <LocationSearch
                locationState={locationState}
                inputRef={placeRef}
                handlePlaceSubmit={handlePlaceSubmit}
                handleLocClick={handleLocClick}
              />
              <FormBtn
                disabled={!(titleRef && locationState.place)}
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
      <div className="review-section">
        {userProps.friends.length > 0 ? (
          <>
            <h2>Friends Feed</h2>
            <div className="review-posts">
            <FriendsFeed
              reviewsData={reviewsData}
              userProps={userProps}
            />
          </div>
          </>
        ) : (
          <>
            <h2>All Users Feed</h2>
            <div className="review-posts">
              <AllUsersFeed reviewsData={reviewsData} />
            </div>
          </>
        )}
      </div>
      <div className="review-button" style={styles.revBtn}>
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
