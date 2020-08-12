import React, { useState } from 'react';

const User = props => {

    const {
        userName,
        firstName,
        lastName,
        profileImg,
    } = props.user;

    const {
        addFriend
    } = props;

    const [buttonState, setButtonState] = useState({
        label: 'Add Friend',
        disabled: false
    })

    const handleButtonClick = event => {
        setButtonState({label: 'Added', disabled: true});
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
    <button onClick={handleButtonClick} disabled={buttonState.disabled} className="button is-link add-friend">{buttonState.label}</button>
            </div>
        </a>
    )
}

export default User;