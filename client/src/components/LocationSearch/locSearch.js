// import React, { useContext } from "react";
// import LocationContext from "../../utils/LocationContext";

// function LocationSearch() {
//   const context = useContext(LocationContext);

//   console.log("CONTEXT IN LOCSEARCH!!!: ", context);

//   {
//     context.location !== undefined ? (
//       context.location.map(({ name, displayString }) => {
//         return <h1>{name}</h1>;
//       })
//     ) : (
//       <h1>We got nothing :(</h1>
//     );
//   }
//   {
//   /* {context.location.map(({ name, displayString }) => {
//         return (
//           <div className="dropdown is-hoverable">
//             <div className="dropdown-trigger">
//               <button
//                 className="button"
//                 aria-haspopup="true"
//                 aria-controls="dropdown-menu4"
//               >
//                 <span>Locations</span>
//                 <span className="icon is-small">
//                   <i className="fas fa-angle-down" aria-hidden="true"></i>
//                 </span>
//               </button>
//             </div>
//             <div className="dropdown-menu" id="dropdown-menu4" role="menu">
//               <div className="dropdown-content">
//                 <div className="dropdown-item">
//                   <p>
//                     {name}
//                     {displayString}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })} */}
// }

// export default LocationSearch;
