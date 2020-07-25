import axios from "axios";

console.log("Inside AUTH.js");

export default {
  // Gets user info
  getUser: function () {
    console.log("Inside AUTH getUser");
    return axios.get('/auth/user');
  },
  // Logs the user out
  logout: function () {
    return axios.post('/auth/logout');
  },
  // Log the user in
  login: function (userData) {
    return axios.post('/auth/login', userData);
  },
  // New user registration
  signup: function (userData) {
    console.log(userData);
    return axios.post('/auth/signup', userData);
  }
};
