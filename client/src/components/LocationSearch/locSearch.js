import React, { useState } from "react";

import placesAPI from "../../utils/placesAPI";
import Input from '../../components/Form/Input';
import { FormBtn } from "../../components/Form";

function LocationSearch() {
  const [locationState, setLocationState] = useState({
    location: "",
    place: "",
    showButtons: true,
    myCoords: {
      lat: 0,
      long: 0,
    },
    locationCoords: {
      lat: 0,
      long: 0,
    },
  });

  //getting users coords and setting them to state
  navigator.geolocation.getCurrentPosition(function (position) {
    setLocationState({
      ...locationState,
      myCoords: {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      },
    });
  });

  //handling the location search
  const handleSubmit = (event) => {
    event.preventDefault();

    //fetching locations that match user input from the places API, setting to location in state
    placesAPI
      .getPlace(locationState.place, locationState.myCoords)
      .then((res) => {
        console.log(res.data.items);
        setLocationState({
          ...locationState,
          location: res.data.items,
          showButtons: true,
        });
      });
  };

  //storing the form input value for the API search
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;

    // Updating the input's state
    setLocationState({
      ...locationState,
      place: value,
    });
  };

  //handling the value of the location selection and filling that name back into the input
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

  return (
    <div>
      <h1>Check out the neighborhood!</h1>
      <div className='columns'>
        <div className='column is-11'>
          <form style={{ marginTop: 10 }}>
            <label htmlFor="username">Where are you? </label>
            <Input
              type="text"
              value={locationState.place}
              onChange={handleInputChange}
            />
          </form>
        </div>
    
        <FormBtn onClick={handleSubmit}>Search</FormBtn>
      </div>
      {/* conditional rendering the buttons to display the places matching the users search */}
      <div>
        {locationState.location.length > 0 ? (
          locationState.location.map((key, i) => {
            console.log("Key Inside Map: ", key);
            console.log(locationState.showButtons);
            return (
              <button
                style={{
                  display: locationState.showButtons ? "" : "none",
                }}
                key={key.id}
                value={key.title}
                data-latitude={key.position.lat}
                data-longitude={key.position.lng}
                className="button"
                onClick={handleLocClick}
              >
                {key.title}
                <br></br>
                {key.address.houseNumber}
              </button>
            );
          })
        ) : (
            <div></div>
          )}
      </div>
    </div>
  );
}

export default LocationSearch;
