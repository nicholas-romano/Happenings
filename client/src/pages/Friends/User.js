import React, { useContext, useState, useEffect } from 'react';
import FriendsContext from "../../utils/FriendsContext";
import API from "../../utils/API";

const User = props => {

    const { handleActionButton } = useContext(FriendsContext);
    const { addButtonDisabled } = useContext(FriendsContext);

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
                <button onClick={() => handleActionButton(actionType, userName)} disabled={addButtonDisabled} className={`button is-link ${actionType}`}>{actionButton}</button>
            </div>
        </a>
    )
}

export default User;