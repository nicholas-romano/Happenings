import axios from "axios";

export default {
  // Gets all books
  getReviews: function() {
    return axios.get("/api/reviews");
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a review to the database:
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  }
};