import React from 'react';
import { StaticStar } from './StaticStar';

const StaticRating = props => {

    const stars = [1,2,3,4,5];
    const reviewRating = props.reviewRating;

    const getStar = star => {
        if (star <= reviewRating) {
            return (<span>★</span>);
        } else {
            return (<span>☆</span>);
        }
    }

    return (
        <div className="star-container-static">
            {stars.map(star => (
                <StaticStar star={star} key={star} getStar={getStar}  />
            ))}
            <div className="star-rating">{reviewRating} out of 5 stars</div>
        </div>
    );
};

export default StaticRating;