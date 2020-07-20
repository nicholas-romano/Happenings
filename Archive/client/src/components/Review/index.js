import React, { useState, useEffect } from 'react';

const Review = props => {

    const [reviewRating, setRatings] = useState(0);

    useEffect(() => {
        setRatings(0);
        console.log('reviewRating: ', reviewRating);
    }, [ratings]);

    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                <h3>Write a Review</h3>
                <form>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input id="reviewTitle" className="input" type="text" placeholder="Title" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Review</label>
                        <div className="control">
                            <textarea id="reviewBody" className="textarea" placeholder="Review"></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className="lable">Rating</label>
                        <div className="control">
                            <span>
                                <i className={(reviewRating === 1) ? 'fas fa-star' : 'far fa-star'} onClick={() => setRatings(1)}></i>
                                <i className={(reviewRating === 2) ? 'fas fa-star' : 'far fa-star'} onClick={() => setRatings(2)}></i>
                                <i className={(reviewRating === 3) ? 'fas fa-star' : 'far fa-star'} onClick={() => setRatings(3)}></i>
                                <i className={(reviewRating === 4) ? 'fas fa-star' : 'far fa-star'} onClick={() => setRatings(4)}></i>
                                <i className={(reviewRating === 5) ? 'fas fa-star' : 'far fa-star'} onClick={() => setRatings(5)}></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Location</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Location" />
                        </div>
                    </div>
                    <input class="button" type="submit" value="Submit input" />
                </form>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    ) 
};
  
export default Review;