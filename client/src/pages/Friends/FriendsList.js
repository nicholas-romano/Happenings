import React, { useContext, useEffect } from "react";
import ListItem from "./Friend";
import FriendsContext from "../../utils/FriendsContext";
import Friend from './Friend';

const FriendsList = () => {

    const { friendsUsernames } = useContext(FriendsContext);

    return (<>
                <nav className="panel">
                    <p className="panel-heading">
                        Friends List
                    </p>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search Friends" />
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                        </p>
                    </div>
                    <p className="panel-tabs">
                        <a className="is-active">All</a>
                        <a>Public</a>
                        <a>Private</a>
                        <a>Sources</a>
                        <a>Forks</a>
                    </p>
                    {
                        friendsUsernames.length === 0 ?
                        <a className="panel-block">
                            You have not added any friends yet.
                        </a> :
                        friendsUsernames.map((friend, index) => {
                            return <Friend friend={friend} key={index} actionType="remove-friend" actionButton="Remove Friend" />
                        })
                    }
                </nav>
        
            </>
    )
};

export default FriendsList;