import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./newMap.css";
import API from "../../utils/API";
import UserLocationContext from "../../utils/UserLocationContext";

function NewMap() {
  const userLocation = useContext(UserLocationContext);

  console.log("COORDS IN NEWMAP: ", userLocation);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: 550,
    latitude: userLocation.coords.lat,
    longitude: userLocation.coords.long,
    zoom: 10,
  });

  const [eventState, setEventState] = useState({
    reviews: [],
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    API.getReviews().then((res) => {
      console.log("Review Response!!!", res.data);
      setEventState({
        reviews: res.data,
      });
    });
  }, []);

  console.log("REVIEWS IN STATE!!!!: ", eventState.reviews);
  // console.log("latitude in state", eventState.reviews[0].reviewGeoLocation[0]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/jvernot/ckd80ii7w09rn1imr6fomm1zd"
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
            <img src="/marker.png" alt="Location Icon" />
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
            <h2>{selectedEvent.reviewTitle}</h2>
            <p>{`${selectedEvent.reviewBody}`}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

export default NewMap;
