import React, { useContext, useState, useEffect } from 'react';
import FriendsContext from "../../utils/FriendsContext";
import API from "../../utils/API";

const Friend = props => {

    const { handleActionButton } = useContext(FriendsContext);

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
                <button onClick={() => handleActionButton(actionType, userName)} className={`button is-link ${actionType}`}>{actionButton}</button>
            </div>
        </a>
    )
}

export default Friend;