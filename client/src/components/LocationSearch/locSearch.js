import React from "react";

function LocationSearch(props) {
  if (!props.locationState) return null;
  return (
    <div>
      <div className="field">
      <label className="label">Place</label>
        <div className="control">
          <input
            type="text"
            className="input" 
            placeholder="Search here (required)"
            name="place"
            defaultValue={props.value}
            onChange={e => props.setLocationState({...props.locationState, place: e.target.value})}
          />
        </div>
        <p className="help">
          Search for a park, restaurant, or location by name. Confirm your
          selection below.
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button
            className="button is-success"
            onClick={props.handlePlaceSubmit}
          >
            Find Locations
          </button>
        </p>
      </div>

      {/* conditional rendering the buttons to display the places matching the users search */}
      <div>
        {props.locationState.location.length > 0 ? (
          props.locationState.location.map((key, i) => {
            //console.log("Key Inside Map: ", key);
            //console.log(props.locationState.showButtons);
            return (
              <button
                style={{
                  display: props.locationState.showButtons ? "" : "none",
                }}
                key={key.id}
                value={key.title}
                data-latitude={key.position.lat}
                data-longitude={key.position.lng}
                className="button"
                onClick={props.handleLocClick}
              >
                {`${key.title} - ${key.address.houseNumber} ${key.address.street}, ${key.address.city}`}
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