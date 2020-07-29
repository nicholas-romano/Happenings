import React, { useEffect, useState } from 'react';
import API from "../../../utils/API";


const Comment = props => {

    const {
        user,
        message,
        time
    } = props.comment;

    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        getCommentOwnerDetails();
    }, []);

    const getCommentOwnerDetails = () => {
        API.getUserInfo(user)
        .then(res => {
            const photo = res.data[0].profileImg;
            setPhoto(photo);
            const firstName = res.data[0].firstName;
            const lastName = res.data[0].lastName;
            const name = `${firstName} ${lastName}`;
            setName(name);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="comment-post">
                <div className="card">
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={(photo !== "") ? photo : "https://bulma.io/images/placeholders/96x96.png"} alt="Comment Owner" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{name}</p>
                                <p className="subtitle is-6">@{user}</p>
                            </div>
                            </div>
                            <div className="content">
                                <p className="messageBody">{message}</p>
                                <p><time dateTime="2016-1-1">{time}</time></p>
                            </div>
                        </div>
                </div>
        </div>
    );
}

export default Comment;