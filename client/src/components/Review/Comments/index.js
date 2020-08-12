import React, { useEffect, useState, useRef, useContext } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import StaticRating from "../StaticRating";
import Comment from "./Comment";
import { TextArea, FormBtn } from '../../../components/Form';
import UserInfoContext from "../../../utils/UserInfoContext";

import API from "../../../utils/API";

const Comments = props => {

    const userProps = useContext(UserInfoContext);
    //console.log('userProps in comments: ', userProps);

    const location = useLocation();
    const [reviewId, setReviewId] = useState('');
    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);

    const [profileImg, setProfileImg] = useState('');
    const [postOwner, setPostOwner] = useState('');

    const [showModal, setModal] = useState(false);

    const messageRef = useRef();

    const formEl = useRef(null);

    const {
        reviewOwner,
        reviewCreated,
        reviewTitle,
        reviewBody,
        reviewRating,
        reviewLocation
    } = review;
        
    useEffect(() => {
        const review = new URLSearchParams(location.search).get('id');
        setReviewId(review);

        if (reviewId !== '') {
            getReview();
        }
    }, [reviewId]);

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

        if (messageRef.current.value === '') {
            return;
        }
        //console.log('submit');
        //console.log('Message: ', messageRef.current.value);
        //console.log('user info: ', userProps);

        const time = new Date();

        const newComment =  {
                user: userProps.userName,
                message: messageRef.current.value,
                time: time.toLocaleString()
        }

        API.addComment(reviewId, newComment)
        .then(res => {
            //console.log('comment res: ', res);
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
        <section className="section settings comments">
            <div className="container">
                <h1 className="title">Comments</h1>
                <div className="review-post">
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-96x96">
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
                                        <img src={(userProps.profileImg !== "") ? userProps.profileImg : "https://bulma.io/images/placeholders/96x96.png"} alt={userProps.firstName} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{userProps.firstName} {userProps.lastName}</p>
                                    <p className="subtitle is-6">@{userProps.userName}</p>
                                </div>
                            </div>
                            <div className="content">
                                <div className="form">                               
                                    <form ref={formEl}>
                                        <TextArea
                                            name="message"
                                            title="Message"
                                            placeholder="Message"
                                            inputRef={messageRef}
                                        />
                                        <FormBtn
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