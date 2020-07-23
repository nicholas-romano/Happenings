import React, { useState, useEffect, useRef } from 'react';
import { Input, Rating, TextArea, FormBtn } from '../Form';
import ReviewPost from './ReviewPost';
import API from "../../utils/API";
import AUTH from "../../utils/AUTH";
import '../../App.css';

const Review = props => {
    const [user, setUser] = useState({
        username: '',
        firstName: '',
        lastName: ''
    });
    const [postOwner, setPostOwner] = useState('');
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

        AUTH.getUser().then(res => {
            const { username, firstName, lastName } = res.data.user
            setUser({username, firstName, lastName});
            loadReviews();
        })
        .catch(err => console.log(err));

    }, []);

    useEffect(() => {
        console.log('reviews: ', reviews);
    }, [reviews]);

    const getPostOwner = reviewOwner => {
        API.getReviewOwner(reviewOwner)
            .then(res => {
                const firstName = res.data[0].firstName;
                const lastName = res.data[0].lastName;
                setPostOwner(`${firstName} ${lastName}`);
            })
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    const loadReviews = () => {

        API.getReviews()
            .then(res => {
                let reviews = res.data;
                //Reverse the order of the array to display to most recent post first:
                reviews.reverse();
                setReviews(reviews);
            })
            .catch(err => console.log('err ', err));
    }

    const handleRatingChange = rating => {
        setRatings(rating);
        setFormObject({...formObject, rating: rating})
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        
        if (formObject.title && formObject.location) {
            API.saveReview({
                reviewOwner: user.username,
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
    }

    const closeReviewForm = () => {
        setModal(false);
    }

    return (
        <>
        <a className="button is-link" onClick={showReviewForm}>Write a Review</a>
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
                                    value={formObject.message}
                                />
                                <Rating
                                    name="rating"
                                    reviewRating={reviewRating}
                                    handleRatingChange={handleRatingChange}
                                />
                                <Input
                                    onChange={handleInputChange}
                                    name="location"
                                    title="Location"
                                    placeholder="Location (required)"
                                    value={formObject.location}
                                />
                                <FormBtn
                                    disabled={!(formObject.title && formObject.location)}
                                    onClick={handleFormSubmit}
                                    >
                                    Submit Review
                                </FormBtn>
                            </form>
                    </div>
                </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeReviewForm}></button>
        </div>
        {
            reviews.map((post, index) => {
                getPostOwner(post.reviewOwner);
                return <ReviewPost key={index} post={post} reviewOwnerName={postOwner} />
            }
                
            )
        }
        </>
    ) 
};
  
export default Review;