import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./newMap.css";
import API from "../../utils/API";

function NewMap() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 550,
    latitude: 35.7796,
    longitude: -78.6382,
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
      mapStyle="mapbox://styles/jvernot/ckd5e6xwf0ixv1iqp99qprvr4"
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
