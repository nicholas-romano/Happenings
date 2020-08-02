import React, { useEffect, useState } from 'react';
import ReviewPost from "./ReviewPost";

const AllUsersFeed = props => {

    const {
        reviews
    } = props;

    const [reviewsDisplayed, setReviewsDisplayed] = useState([]);

    useEffect(() => {
        // console.log('Reviews: ', reviews);
        setReviewsDisplayed(reviews) 
    }, [reviews]);

    return (
        <>
            <div className="review-post">
                <h2>All Users Feed</h2>
                {
                    reviewsDisplayed.length > 0 ?
                    reviewsDisplayed.map((post, index) => {
                        return <ReviewPost key={index} post={post} />;
                    })
                    : ''
                }
            </div>
        </>
    )
}

export default AllUsersFeed;