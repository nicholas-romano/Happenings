import React, { useEffect, useState } from 'react';
import ReviewPost from "./ReviewPost";

const FriendsFeed = props => {

    const {
        reviews,
        friends,
        user
    } = props;

    console.log('friends feed props: ', props);

    const [reviewsDisplayed, setReviewsDisplayed] = useState([]);

    useEffect(() => {

        let friendReviews = [];

        if (reviews.length > 0) {
            for (let i = 0; i < reviews.length; i++) {
                const reviewOwner = reviews[i].reviewOwner;
                for (let j = 0; j < friends.length; j++) {
                    const friend = friends[j].userName;
                    if (reviewOwner === friend || reviewOwner === user.userName) {
                        friendReviews.push(reviews[i])
                        break;
                    }
                }
            }
            setReviewsDisplayed(friendReviews);

        }

    }, [reviews]);


    useEffect(() => {
        if (reviewsDisplayed.length > 0) {
            console.log('friend reviews: ', reviewsDisplayed);
        }
    }, [reviewsDisplayed]);

    return (
        <>
        <div className="review-post">
            <h2>Friends Feed</h2>
            {
                reviewsDisplayed.length > 0 ?
                reviewsDisplayed.map((post, index) => {
                    return <ReviewPost post={post} key={index} />
                }) : ''
            }
        </div>
        </>
    )
}

export default FriendsFeed;