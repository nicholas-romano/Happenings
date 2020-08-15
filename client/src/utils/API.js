import axios from "axios";

export default {
  // Gets all reviews:
  getUserInfo: function(userName) {
    return axios.get("/api/user/" + userName);
  },
  getReviews: function() {
    return axios.get("/api/reviews");
  },
  getReviewById: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  getUsers: function() {
    return axios.get("/api/user/users");
  },
  updateUser: function(userData) {
    return axios.put("/api/user", userData);
  },
  addFriend: function(friendUserName) {
    return axios.put("/api/user/addFriend/" + friendUserName)
  },
  removeFriend: function(friendUserName) {
    return axios.delete("/api/user/removeFriend/" + friendUserName)
  },
  updateReviewsUserName: function(userName) {
    return axios.put("/api/reviews/updateUsername/" + userName);
  },
  updateReviewsComments: function(userName) {
    return axios.put("/api/reviews/updateComments/" + userName);
  },
  updateFriendsLists: function(userName) {
    return axios.put("/api/user/updateFriends/" + userName);
  },
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  },
  addComment: function(id, commentData) {
    return axios.put("/api/reviews/" + id, commentData)
  }
};