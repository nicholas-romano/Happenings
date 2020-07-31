import React from "react";

import Input from "../../components/Form/Input";

function LocationSearch(props) {
 
  if (!props.formObject) return null;

  const { 
    setFormObject, 
    formObject,
    type, 
    name, 
    title, 
    placeholder, 
    value, 
    handlePlaceSubmit, 
    handleLocClick 
  } = props;

  return (
    <div>
        <Input
            name={name}
            title={title}
            type={type}
            setFormObject={setFormObject}
            formObject={formObject}
            value={value}
            placeholder={placeholder}
        />
      <div className="field">
        <p className="help">
          Search for a park, restaurant, or location by name. Confirm your
          selection below.
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success" onClick={handlePlaceSubmit}>
            Find Locations
          </button>
        </p>
      </div>

      <div>
        {formObject.location !== undefined ? (
          formObject.location.map((key, i) => {
            console.log("Key Inside Map: ", key);
            console.log('show button: ', formObject.showButtons);
            return (
              <button
                style={{
                  display: formObject.showButtons ? "" : "none",
                }}
                key={key.id}
                value={key.title}
                data-latitude={key.position.lat}
                data-longitude={key.position.lng}
                className="button"
                onClick={handleLocClick}
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
