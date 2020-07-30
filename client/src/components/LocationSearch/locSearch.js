// import React from "react";

// function LocationSearch(props) {
//   if (!props.locationState) return null;

//   // const { setFormObject, formObject, type, name, title, placeholder } = props;

//   return (
//     <div>
//       <div className="field">
//         <label className="label">Location</label>
//         <div className="control">
//           <input
//             className="input"
//             type="text"
//             placeholder="Search here"
//             value={props.value}
//             onChange={props.handleInputChange}
//             name="location"
//           />
//         </div>
//         <p className="help">
//           Search for a park, restaurant, or location by name. Confirm your
//           selection below.
//         </p>
//       </div>
//       <div className="field">
//         <p className="control">
//           <button
//             className="button is-success"
//             onClick={props.handlePlaceSubmit}
//           >
//             Find Locations
//           </button>
//         </p>
//       </div>
//       {/* conditional rendering the buttons to display the places matching the users search */}
//       <div>
//         {props.locationState.location.length > 0 ? (
//           props.locationState.location.map((key, i) => {
//             console.log("Key Inside Map: ", key);
//             console.log(props.locationState.showButtons);
//             return (
//               <button
//                 style={{
//                   display: props.locationState.showButtons ? "" : "none",
//                 }}
//                 key={key.id}
//                 value={key.title}
//                 data-latitude={key.position.lat}
//                 data-longitude={key.position.lng}
//                 className="button"
//                 onClick={props.handleLocClick}
//               >
//                 {`${key.title} - ${key.address.houseNumber} ${key.address.street}, ${key.address.city}`}
//               </button>
//             );
//           })
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LocationSearch;

import React from "react";

function LocationSearch(props) {
  if (!props.locationState) return null;
  return (
    <div>
      <div className="field">
        <label className="label">Location</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search here"
            value={props.value}
            onChange={props.handleInputChange}
            name="location"
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
            console.log("Key Inside Map: ", key);
            console.log(props.locationState.showButtons);
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
