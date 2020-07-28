import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import BreweryData from "../../data/breweries.json";
import "./newMap.css";
import API from "../../utils/API";

function NewMap() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 35.7796,
    longitude: -78.6382,
    zoom: 10,
  });

  const [event, setEventState] = useState({
    name: "",
    coords: {
      lat: 0,
      long: 0,
    },
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    API.getReviews().then((res) => {
      console.log("Review Response!!!", res);
    });
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/jvernot/ckd5e6xwf0ixv1iqp99qprvr4"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {BreweryData.items.map((brewery) => (
        <Marker
          key={brewery.id}
          latitude={brewery.position.lat}
          longitude={brewery.position.lng}
        >
          <button
            className="marker-btn"
            onClick={(event) => {
              event.preventDefault();
              setSelectedEvent(brewery);
            }}
          >
            <img src="/HapLogoIcon.png" alt="Location Icon" />
            {/* <i class="fas fa-map-marker-alt"></i> */}
          </button>
        </Marker>
      ))}
      {selectedEvent ? (
        <Popup
          latitude={selectedEvent.position.lat}
          longitude={selectedEvent.position.lng}
          onClose={() => {
            setSelectedEvent(null);
          }}
        >
          <div>
            <h2>{selectedEvent.title}</h2>
            <p>{`${selectedEvent.address.houseNumber} ${selectedEvent.address.street}, ${selectedEvent.address.city}`}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

export default NewMap;
