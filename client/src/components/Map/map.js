import React, { useState, useEffect } from "react";

import geocodeAPI from "../../utils/geocodeAPI";

function Map() {
  const [mapState, setMapState] = useState({
    places: ["Raleigh, NC", "Wilmington, NC"],
  });

  geocodeAPI.getCoords(mapState.places).then((res) => {
    console.log(res.data.results);
  });

  return <div></div>;
}

export default Map;
