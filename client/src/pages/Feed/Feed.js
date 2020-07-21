import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";

import LocationContext from "../../utils/LocationContext";
// import LocationSearch from "../../components/LocationSearch/locSearch";
import mapquestAPI from "../../utils/mapquestAPI";
import { Input, FormBtn } from "../../components/Form";

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Latitude is :", position.coords.latitude);
  console.log("Longitude is :", position.coords.longitude);
});

function Feed() {
  const [locationState, setLocationState] = useState({
    location: "",
    place: "",
  });

  // const context = useContext(LocationContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    mapquestAPI.getPlace(locationState.place).then((res) => {
      console.log(res.data.results);
      setLocationState({
        ...locationState,
        location: res.data.results,
      });
    });
  };

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;

    // Updating the input's state
    setLocationState({
      ...locationState,
      place: value,
    });
  };

  const handleLocClick = (event) => {
    event.preventDefault();

    let selection = event.target.value;

    console.log("Selection: ", selection);

    setLocationState({
      ...locationState,
      place: selection,
    });
  };

  // console.log("Location: ", locationState.location);

  return (
    <div>
      <h1>Check out the neighborhood!</h1>
      <form style={{ marginTop: 10 }}>
        <label htmlFor="username">Where are you? </label>
        <Input
          type="text"
          value={locationState.place}
          onChange={handleInputChange}
        />
        <FormBtn onClick={handleSubmit}>Search</FormBtn>
      </form>

      {locationState.location.length > 0 ? (
        // console.log("Location Body: ", locationState.location)
        // locationState.location[0].map(({ name, displayString }) => {
        locationState.location.map((key, i) => {
          console.log("Key Inside Map: ", key);
          return (
            <button
              key={key.id}
              value={key.name}
              className="button"
              onClick={handleLocClick}
            >
              {key.name}
            </button>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Feed;
