import React, { useState, useEffect } from 'react';
import API from "../../utils/API";

const User = props => {

    const {
        userName,
        firstName,
        lastName,
        profileImg
    } = props.user;

    const {
        actionButton,
        actionType
    } = props;

    const addFriend = userName => {
        console.log('add friend to db ');
        API.addFriend(userName)
        .then(res => {
            console.log('Friend added: ', res);
            window.location.reload();
        })
        .catch(err => console.log('err: ', err));
    }

    const handleButtonClick = event => {
        console.log('event ', event);
        event.target.disabled = true;
        event.target.innerHTML = "Added";
        addFriend(userName);
    }

    return (
        <a className="panel-block">
            <label>
                <img src={(profileImg !== "") ? profileImg : "https://bulma.io/images/placeholders/96x96.png"} 
                alt={userName} width="96" />
            </label>
            <label className="name-text">
            {firstName} {lastName} ({userName})
            </label>
            <div className="action-button">
                <button onClick={handleButtonClick} className={`button is-link ${actionType}`}>{actionButton}</button>
            </div>
        </a>
    )
}

export default User;