import axios from "axios";

const mapquestURL =
  "http://www.mapquestapi.com/geocoding/v1/batch?key=LiWCIC4JV303Qc53bcTzJfXXnIvx9G5i&location=";

export default {
  getCoords: function (places) {
    const queryString = places.join(`&location=`);
    return axios.get(`${mapquestURL}${queryString}`);
  },
};
