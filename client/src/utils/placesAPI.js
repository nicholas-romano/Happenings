import axios from "axios";

const hereURL =
  "https://discover.search.hereapi.com/v1/discover?apikey=Vrz_Zo333ZzQ8yPEsFpn-feF4D3azhUmjudkwHCtEC0&limit=5&in=countryCode:USA&at=";

export default {
  getPlace: function (place, coords) {
    let placeStr = place.replace(/\s+/g, "-");
    console.log(placeStr);
    let locationCoords = `${coords.lat},${coords.long}`;
    const queryURL = `${hereURL}${locationCoords}&q=${placeStr}`;
    console.log("queryURL:", queryURL);
    return axios.get(queryURL);
  },
};
