import React from "react";
import Friend from './Friend';

const FriendsList = props => {

    const {
        friends
    } = props;

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
                    
                    {
                        friends.length === 0 ?
                        <a className="panel-block">
                            You have not added any friends yet.
                        </a> :
                        friends.map((friend, index) => {
                            return <Friend friend={friend} key={index} actionType="remove-friend" actionButton="Remove Friend" />
                        })
                    }
                </nav>
        
            </>
    )
};

export default FriendsList;