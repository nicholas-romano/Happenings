import React from 'react';
import { Star } from './Star';

export const Rating = props => {

    const { reviewRating, handleRatingChange } = props;
    const stars = [1,2,3,4,5];

    const getStar = star => {
        if (star <= reviewRating) {
            return (<span>★</span>);
        } else {
            return (<span>☆</span>);
        }
    }

    return (
        <div className="field">
            <label className="label">Rating</label>
                <div className="control">
                    <div className="star-container-clickable">
                        {stars.map(star => (
                            <Star star={star} key={star} getStar={getStar} handleRatingChange={handleRatingChange}  />
                        ))}
                        <div className="star-rating">{reviewRating} out of 5 stars</div>
                    </div>
                </div>
        </div>
    );
};