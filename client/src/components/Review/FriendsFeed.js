import React, { useEffect, useState } from 'react';
import ReviewPost from "./ReviewPost";

const FriendsFeed = props => {

    const {
        reviewsData,
        userProps
    } = props;

    //console.log('friends feed props: ', props);

    const [reviewsDisplayed, setReviewsDisplayed] = useState([]);

    useEffect(() => {

        let friendReviews = [];
    
        //console.log('Reviews Set: ', reviewsData);
    
        if (reviewsData.length > 0) {
            for (let i = 0; i < reviewsData.length; i++) {
                const reviewOwner = reviewsData[i].reviewOwner;
                for (let j = 0; j < userProps.friends.length; j++) {
                    const friend = userProps.friends[j].userName;
                    if (reviewOwner === friend || reviewOwner === userProps.userName) {
                        friendReviews.push(reviewsData[i])
                        break;
                    }
                }
            }
            setReviewsDisplayed(friendReviews);
    
        }
    
    }, [reviewsData]);
    

    return (
        <>
        <div className="review-post">
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