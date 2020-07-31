import React, { useState, useEffect } from 'react';
import API from "../../utils/API";

const Friend = props => {

    const [friendInfo, setFriendInfo] = useState({});

    const {
        userName
    } = props.friend;

    const {
        actionButton,
        actionType
    } = props;

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

    const removeFriend = userName => {
        console.log('removed friend from db ');
        API.removeFriend(userName)
        .then(res => {
            console.log('Friend removed: ', res);
            window.location.reload();
        })
        .catch(err => console.log('err: ', err));
    }

    const handleButtonClick = event => {
        console.log('event ', event);
        event.target.disabled = true;
        event.target.innerHTML = "Removed";
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
                <button onClick={handleButtonClick} className={`button is-link ${actionType}`}>{actionButton}</button>
            </div>
        </a>
    )
}

export default Friend;