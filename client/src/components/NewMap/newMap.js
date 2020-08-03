import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./newMap.css";
import UserLocationContext from "../../utils/UserLocationContext";
import PulseLoader from "react-spinners/PulseLoader";

function NewMap({ reviewData }) {
  const userLocation = useContext(UserLocationContext);

  console.log("COORDS IN NEWMAP: ", userLocation);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: 550,
    latitude: 0,
    longitude: 0,
    zoom: 11,
  });

  const [eventState, setEventState] = useState({
    reviews: [],
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

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
    setEventState({
      reviews: reviewData,
    });
  }, [reviewData]);

  return viewport.latitude === 0 ? (
    <div className="container">
      <PulseLoader size={40} margin={50} />
    </div>
  ) : (
    <div className="container">
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
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{selectedEvent.reviewTitle}</p>
                      <p class="subtitle is-6">{selectedEvent.reviewOwner}</p>
                    </div>
                  </div>

                  <div className="content">
                    <p>{selectedEvent.reviewBody}</p>
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
