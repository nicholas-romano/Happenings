import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./newMap.css";
import UserLocationContext from "../../utils/UserLocationContext";
import PulseLoader from "react-spinners/PulseLoader";
import StaticRating from "../Review/StaticRating";
import API from "../../utils/API";
require("dotenv").config();


function NewMap({ reviewsData, friends, user }) {
  const userLocation = useContext(UserLocationContext);

  //console.log("COORDS IN NEWMAP: ", userLocation);

  //console.log('props new map reviews: ', reviewsData);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: 550,
    latitude: 0,
    longitude: 0,
    zoom: 12,
  });

  console.log('process.env inside newMap.js: ', process.env.REACT_APP_MAPBOX_TOKEN);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [profileImg, setProfileImg] = useState('');
  const [postOwner, setPostOwner] = useState('');

  const [eventState, setEventState] = useState({
    reviews: [],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {

    let friendReviews = [];

    console.log('friends amount: ', friends);

    if (friends.length > 0) {
        for (let i = 0; i < reviewsData.length; i++) {
            const reviewOwner = reviewsData[i].reviewOwner;
            for (let j = 0; j < friends.length; j++) {
                const friend = friends[j].userName;
                if (reviewOwner === friend || reviewOwner === user.userName) {
                    friendReviews.push(reviewsData[i])
                    break;
                }
            }
        }
        setEventState({
          reviews: friendReviews,
        });
    } else {
      setEventState({
        reviews: reviewsData,
      });
    }

}, [reviewsData]);

useEffect(() => {
  if (selectedEvent !== null) {
    getReviewOwnerDetails(selectedEvent.reviewOwner)
  }
}, [selectedEvent]);

  const getReviewOwnerDetails = reviewOwner => {
    API.getUserInfo(reviewOwner)
    .then(res => {
        const profilePhoto = res.data[0].profileImg;
        setProfileImg(profilePhoto);

        const firstName = res.data[0].firstName;
        const lastName = res.data[0].lastName;
        const ownerName = `${firstName} ${lastName}`;
        setPostOwner(ownerName);
    })
    .catch(err => console.log(err));
}  

  return viewport.latitude === 0 ? (
    <div className="container">
      <PulseLoader size={40} margin={50} />
    </div>
  ) : (
    <div className="container">
      <ReactMapGL
        className="map"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/nromano/ckdho73fw012x1io4k3z39a07"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {eventState.reviews.map((post) => (
          <Marker
            key={post._id}
            latitude={post.reviewLat}
            longitude={post.reviewLong}
          >
            <button
              className="marker-btn"
              onClick={(event) => {
                event.preventDefault();
                setSelectedEvent(post);
              }}
            >
              <img src="/mapMarkerWhite.png" alt="Location Icon" />
            </button>
          </Marker>
        ))}
        {selectedEvent ? (
          <Popup
            latitude={selectedEvent.reviewLat}
            longitude={selectedEvent.reviewLong}
            onClose={() => {
              setSelectedEvent(null);
            }}
          >
            <div>
              <div className="card popup-card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={(profileImg !== "") ? profileImg : "https://bulma.io/images/placeholders/96x96.png"} width="96" height="96" alt={postOwner} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{postOwner}</p>
                      <p className="subtitle is-6">@{selectedEvent.reviewOwner}</p>
                    </div>
                  </div>
                  <div className="content">
                    <p className="title">{selectedEvent.reviewTitle}</p>
                    <p className="messageBody">{selectedEvent.reviewBody}</p>
                    <StaticRating reviewRating={selectedEvent.reviewRating} />
                    <br />
                    <time>{selectedEvent.reviewCreated}</time>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default NewMap;
