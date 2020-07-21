import axios from "axios";

const mapquestURL =
  "https://www.mapquestapi.com/search/v4/place?sort=relevance&feedback=false&key=LiWCIC4JV303Qc53bcTzJfXXnIvx9G5i&q=";

export default {
  getPlace: function (place) {
    return axios.get(`${mapquestURL}${place}`);
  },
};
