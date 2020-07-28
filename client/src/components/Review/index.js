import React, { useState, useEffect, useRef } from "react";
import Input from "../../components/Form/Input";
import { Rating, TextArea, FormBtn } from "../Form";
import ReviewPost from "./ReviewPost";
import API from "../../utils/API";
import AUTH from "../../utils/AUTH";
import "../../App.css";


const styles = {
    revBtn: {
        backgroundColor: 'rgba(42, 45, 52, 1)'
    }
}

const Review = props => {

    const [user, setUser] = useState({
        userName: '',
        firstName: '',
        lastName: ''
    });
    const [showModal, setModal] = useState(false);
    const [formObject, setFormObject] = useState({
        title: '',
        message: '',
        rating: 0,
        location: ''
    });
    const [reviewRating, setRatings] = useState(0);
    const formEl = useRef(null);
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    AUTH.getUser()
      .then((res) => {
        const { userName, firstName, lastName } = res.data.user;
        setUser({ userName, firstName, lastName });
        return loadReviews();
      })
      .catch((err) => console.log(err));
  }, []);

  // Handles updating component state when the user types into the input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

const loadReviews = () => {
    API.getReviews()
      .then(res => {  
        return setReviews(res.data);
      })
      .catch((err) => console.log("err ", err));
  };

  const handleRatingChange = (rating) => {
    setRatings(rating);
    setFormObject({ ...formObject, rating: rating });
  };

    const handleSubmit = event => {
        event.preventDefault();
        
        if (formObject.title && formObject.location) {
            API.saveReview({
                reviewOwner: user.userName,
                reviewCreated: Date.now(),
                reviewTitle: formObject.title,
                reviewBody: formObject.message,
                reviewRating: formObject.rating,
                reviewLocation: formObject.location
            })
            .then(res => {
                formEl.current.reset();
                setRatings(0);
                setFormObject({rating: 0});
                closeReviewForm();
                loadReviews();
            })
            .catch(err => console.log(err));
        }
    };

    const showReviewForm = () => {
        setModal(true);
    };

    const closeReviewForm = () => {
        setModal(false);
    }

    return (
        <>
        <div className={showModal ? 'is-active modal' : 'modal'} id="review-modal">
            <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="form">
                        <h2>Write a Review</h2>
                            <form ref={formEl}>
                                <Input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="title"
                                    title="Title"
                                    placeholder="Title (required)"
                                    value={formObject.title}
                                />
                                <TextArea
                                    onChange={handleInputChange}
                                    name="message"
                                    value={formObject.message}
                                    title="Message"
                                    placeholder="Message"
                                />
                                <Rating
                                    name="rating"
                                    reviewRating={reviewRating}
                                    handleRatingChange={handleRatingChange}
                                />
                                <Input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="location"
                                    title="Location"
                                    placeholder="Location (required)"
                                    value={formObject.location}
                                />
                                <FormBtn
                                    disabled={!(formObject.title && formObject.location)}
                                    onClick={handleSubmit}
                                    >
                                    Submit Review
                                </FormBtn>
                            </form>
                    </div>
                </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeReviewForm}></button>
        </div>
        <div className="review-posts">
        {
            reviews.map((post, index) => {
                return <ReviewPost key={index} post={post} />
            }   
            )
        }
        </div>
      <div className="review-button" style={styles.revBtn}>
        <button
          href="review"
          className="button is-link"
          onClick={showReviewForm}
        >
          Write a Review
        </button>
      </div>
    </>
  );
};

export default Review;
