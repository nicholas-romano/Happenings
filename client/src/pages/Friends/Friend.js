import React, { useState, useEffect } from 'react';
import API from "../../utils/API";

const Friend = props => {

    const [friendInfo, setFriendInfo] = useState({});

    const {
        userName
    } = props.friend;

    const {
        removeFriend
    } = props;

    const [buttonState, setButtonState] = useState({
        label: 'Remove Friend',
        disabled: false
    })

    useEffect(() => {
        getFriendInfo(userName);
    }, [])

    const getFriendInfo = userName => {
        API.getUserInfo(userName)
                .then(res => {
                    const {userName, firstName, lastName, profileImg} = res.data[0];
                    setFriendInfo(
                        {
                            userName: userName,
                            firstName: firstName,
                            lastName: lastName,
                            profileImg: profileImg
                        } 
                    )
                })
    }

    const handleButtonClick = event => {
        setButtonState({label: 'Removed', disabled: true});
        removeFriend(userName);
    }

    return (
        <a className="panel-block">
            <label>
                <img src={(friendInfo.profileImg !== "") ? friendInfo.profileImg : "https://bulma.io/images/placeholders/96x96.png"} 
                alt={userName} width="96" />
            </label>
            <label className="name-text">
            {friendInfo.firstName} {friendInfo.lastName} ({friendInfo.userName})
            </label>
            <div className="action-button">
                <button onClick={handleButtonClick} disabled={buttonState.disabled} className="button is-link remove-friend">{buttonState.label}</button>
            </div>
        </a>
    )
}

export default Friend;