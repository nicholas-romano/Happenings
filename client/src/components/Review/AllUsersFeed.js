import React, { useEffect, useState } from 'react';
import ReviewPost from "./ReviewPost";

const AllUsersFeed = props => {

    const {
        reviewsData
    } = props;

    return (
        <>
            <div className="review-post">
                {
                    reviewsData.length > 0 ?
                    reviewsData.map((post, index) => {
                        return <ReviewPost key={index} post={post} />;
                    })
                    : ''
                }
            </div>
        </>
    )
}

export default AllUsersFeed;