import React, { useState } from 'react';

export const Rating = props => {

    const { reviewRating, handleRatingChange } = props;
    const stars = [1,2,3,4,5];

    const getStar = star => {
        if (star <= reviewRating) {
            return (<span onClick={() => handleRatingChange(star)}>★</span>);
        } else {
            return (<span onClick={() => handleRatingChange(star)}>☆</span>);
        }
    }

    return (
        <div className="field">
            <label className="label">Rating</label>
                <div className="control">
                    <div className="star-container">
                        {stars.map(star => {
                            return getStar(star);
                        })}
                    </div>
                </div>
        </div>
    );
};