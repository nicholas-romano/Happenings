import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import StaticRating from "./StaticRating";
import API from "../../utils/API";

const ReviewPost = (props) => {

    const {
        _id,
        reviewOwner,
        reviewTitle,
        reviewBody,
        reviewRating,
        reviewLocation,
        reviewCreated,
        reviewComments
    } = props.post;

    const [profileImg, setProfileImg] = useState('');
    const [postOwner, setPostOwner] = useState('');
    const didMountRef = useRef(false);

    useEffect(() => {
        getReviewOwnerDetails(reviewOwner);
    }, [])

    //Updates component when a new post is added:
    useEffect(() => {
        if (didMountRef.current) {
            getReviewOwnerDetails(reviewOwner);
        } else {
            didMountRef.current = true;
        }
    })

    const getReviewOwnerDetails = reviewOwner => {
        API.getUserInfo(reviewOwner)
        .then(res => {
            const profilePhoto = res.data[0].profileImg;
            setProfileImg(profilePhoto);

            const firstName = res.data[0].firstName;
            const lastName = res.data[0].lastName;
            const ownerName = `${firstName} ${lastName}`;
            setPostOwner(ownerName);
        })
        .catch(err => console.log(err));
    }  

    return (
        <div className="review-post feed">
            <div className="card">
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={(profileImg !== "") ? profileImg : "https://bulma.io/images/placeholders/96x96.png"} width="96" height="96" alt={postOwner} />
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
                        <h3 className="rating"><StaticRating reviewRating={reviewRating} /></h3>
                        <p className="messageBody">{reviewBody}</p>
                        <p><time dateTime="2016-1-1">{reviewCreated}</time></p>
                        <Link to={{pathname:"/comments",search: "?id=" + _id}}>
                            <button className="review-comment-button button is-dark">Comment</button>
                        </Link>
                        <div className="total-comments">
                            <label>
                                {(reviewComments.length > 0 ? reviewComments.length + ' total comment(s)' : '')}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ReviewPost;
