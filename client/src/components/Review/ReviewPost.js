import React from 'react';
import StaticRating from '../Form/Rating/StaticRating';

const ReviewPost = props => {
    console.log('props: ', props);
    const { reviewOwner, 
            reviewOwnerFirstName, 
            reviewOwnerLastName, 
            reviewTitle, 
            reviewBody,
            reviewRating, 
            reviewLocation,
            reviewCreated 
          } = props.post;

    return (
        <div className="post">
            <div className="card">
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{reviewOwnerFirstName} {reviewOwnerLastName}</p>
                        <p className="subtitle is-6">@{reviewOwner}</p>
                    </div>
                    </div>
                    <div className="content">
                        <p className="title">{reviewTitle}</p>
                        <p className="location">{reviewLocation}</p>
                        <h3><StaticRating reviewRating={reviewRating} /></h3>
                       <p>{reviewBody}</p>
                        <p><time dateTime="2016-1-1">{reviewCreated}</time></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPost;