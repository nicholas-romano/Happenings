import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import BreweryData from "../../data/breweries.json";

function NewMap() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 35.7796,
    longitude: -78.6382,
    zoom: 8,
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {BreweryData.items.map((brewery) => (
        <Marker
          key={brewery.id}
          latitude={brewery.position.lat}
          longitude={brewery.position.lng}
        >
          <button
            onClick={(event) => {
              event.preventDefault();
              setSelectedEvent(brewery);
            }}
          >
            <img src="/beer.svg" alt="Brewery Icon" />
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
