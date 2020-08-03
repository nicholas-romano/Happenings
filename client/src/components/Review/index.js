import React, { useState, useEffect, useRef, useContext } from "react";
import Input from "../../components/Form/Input";
import { Rating, TextArea, FormBtn } from "../Form";
import FriendsFeed from "./FriendsFeed";
import AllUsersFeed from "./AllUsersFeed";
import API from "../../utils/API";
import AUTH from "../../utils/AUTH";
import "../../App.css";
import LocationSearch from "../LocationSearch/locSearch";
import placesAPI from "../../utils/placesAPI";
import UserLocationContext from "../../utils/UserLocationContext";

const styles = {
  revBtn: {
    backgroundColor: "rgba(42, 45, 52, 1)",
  },
};

const Review = (props) => {
  const userLocation = useContext(UserLocationContext);

  console.log("props review: ", props);

  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
  });
  const [friendsUsernames, setFriendsUsernames] = useState([]);

  const [showModal, setModal] = useState(false);
  const [formObject, setFormObject] = useState({
    title: "",
    message: "",
    rating: 0,
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
        return getUserFriends(userName);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //console.log("friendsUsernames: ", friendsUsernames);
    if (friendsUsernames.length > 0) {
      console.log("user has friends ", friendsUsernames);
    }
  }, [friendsUsernames]);

  const getUserFriends = (userName) => {
    API.getUserInfo(userName).then((res) => {
      if (res.data[0].friends.length > 0) {
        setFriendsUsernames(res.data[0].friends);
      }
      return loadReviews();
    });
  };

  const loadReviews = () => {
    API.getReviews()
      .then((res) => {
        props.setReviewState(res.data);
        return setReviews(res.data);
      })
      .catch((err) => console.log("err ", err));
  };

  //handling the location search
  const handlePlaceSubmit = (event) => {
    event.preventDefault();

    //fetching locations that match user input from the places API, setting to location in state
    placesAPI
      .getPlace(locationState.place, locationState.myCoords)
      .then((res) => {
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

  const handleRatingChange = (rating) => {
    setRatings(rating);
    setFormObject({ ...formObject, rating: rating });
  };

  const time = new Date();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formObject.title && locationState.place) {
      //console.log("formObject: ", formObject);
      API.saveReview({
        reviewOwner: user.userName,
        reviewCreated: time.toLocaleString(),
        reviewTitle: formObject.title,
        reviewBody: formObject.message,
        reviewRating: formObject.rating,
        reviewLocation: locationState.place,
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
                value={locationState.place}
                locationState={locationState}
                setLocationState={setLocationState}
                handlePlaceSubmit={handlePlaceSubmit}
                handleLocClick={handleLocClick}
              />
              <FormBtn
                disabled={!(formObject.title && locationState.place)}
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
        {friendsUsernames.length > 0 ? (
          <FriendsFeed
            reviews={reviews}
            friends={friendsUsernames}
            user={user}
          />
        ) : (
          <AllUsersFeed reviews={reviews} />
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
