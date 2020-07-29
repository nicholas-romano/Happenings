import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import StaticRating from "../StaticRating";
import Comment from "./Comment";
import { TextArea, FormBtn } from '../../../components/Form';
import API from "../../../utils/API";
import AUTH from "../../../utils/AUTH";

const Comments = props => {

    const [user, setUser] = useState({
        userName: "",
        firstName: "",
        lastName: ""
    });

    const [userProfileImg, setUserProfileImg] = useState('');

    const location = useLocation();
    const [reviewId, setReviewId] = useState('');
    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);

    const [profileImg, setProfileImg] = useState('');
    const [postOwner, setPostOwner] = useState('');

    const [showModal, setModal] = useState(false);

    const [formObject, setFormObject] = useState({
        message: ''
    });
    const formEl = useRef(null);

    const {
        reviewOwner,
        reviewCreated,
        reviewTitle,
        reviewBody,
        reviewRating,
        reviewLocation,
        reviewLat,
        reviewLong,
        reviewGeoLocation,
        reviewComments
    } = review;

    useEffect(() => {
        AUTH.getUser()
          .then((res) => {
            const { userName, firstName, lastName } = res.data.user;
            setUser({ userName, firstName, lastName });
            return getUserPhoto(userName);
          })
          .catch((err) => console.log(err));
    }, []);
        
    useEffect(() => {
        const review = new URLSearchParams(location.search).get('id');
        setReviewId(review);

        if (reviewId !== '') {
            getReview();
        }
    }, [reviewId]);

    const getUserPhoto = userName => {
        API.getUserInfo(userName)
        .then(res => {
            const profilePhoto = res.data[0].profileImg;
            setUserProfileImg(profilePhoto);
        });
    }

    const getReview = () => {
        API.getReviewById(reviewId)
        .then(res => {
            setReview(res.data[0]);
            const comments = res.data[0].reviewComments;
            setComments(comments);
            return getReviewOwnerDetails(res.data[0].reviewOwner);
        });
    }

    const getReviewOwnerDetails = reviewOwner => {
        API.getUserInfo(reviewOwner)
        .then(res => {
            const profilePhoto = res.data[0].profileImg;
            setProfileImg(profilePhoto);

            const firstName = res.data[0].firstName;
            const lastName = res.data[0].lastName;
            const ownerName = `${firstName} ${lastName}`;
            setPostOwner(ownerName);
            return;
        })
        .catch(err => console.log(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
        console.log('Message: ', formObject.message);
        console.log('user info: ', user);

        const time = new Date();

        const newComment =  {
                user: user.userName,
                message: formObject.message,
                time: time.toLocaleString()
        }

        API.addComment(reviewId, newComment)
        .then(res => {
            console.log('comment res: ', res);
            hideForm();
            return getReview();
        });
    }

    const showForm = () => {
        setModal(true);
      };
    
      const hideForm = () => {
        setModal(false);
      };

    return (
        <>
        <Header />
        <section className="section settings">
            <div className="container">
                <h1 className="title">Comments</h1>
                <div className="review-post">
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={(profileImg !== "") ? profileImg : "https://bulma.io/images/placeholders/96x96.png"} alt={reviewOwner} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{postOwner}</p>
                                    <p className="subtitle is-6">@{reviewOwner}</p>
                                </div>
                            </div>
                            <div className="content">
                                <p className="title">{reviewTitle}</p>
                                <p className="location">{reviewLocation}</p>
                                <h3><StaticRating reviewRating={reviewRating} /></h3>
                                <p className="messageBody">{reviewBody}</p>
                                <p><time dateTime="2016-1-1">{reviewCreated}</time></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-comment">
                    <button className="button is-link" onClick={showForm}>Add Comment</button>
                </div>
                {
                    comments.map((comment, index) => {
                        return <Comment key={index} comment={comment} />
                    })
                }
            </div>
        </section>
    <div
        className={showModal ? "is-active modal" : "modal"}
        id="review-modal"
      >
      <div className="modal-background"></div>
        <div className="modal-content">
                <h2>Leave a Comment</h2>
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={(userProfileImg !== "") ? userProfileImg : "https://bulma.io/images/placeholders/96x96.png"} alt={user.firstName} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{user.firstName} {user.lastName}</p>
                                    <p className="subtitle is-6">@{user.userName}</p>
                                </div>
                            </div>
                            <div className="content">
                                <div className="form">                               
                                    <form ref={formEl}>
                                        <TextArea
                                            name="message"
                                            title="Message"
                                            setFormObject={setFormObject}
                                            formObject={formObject}
                                            value={formObject.message}
                                            placeholder="Message"
                                        />
                                        <FormBtn
                                            disabled={!(formObject.message)}
                                            onClick={handleSubmit}
                                        >
                                            Post Comment
                                        </FormBtn>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={hideForm}
        ></button>
      </div>
        <Footer />
        </>
    )
}

export default Comments;