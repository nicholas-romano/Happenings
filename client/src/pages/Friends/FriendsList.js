import React from "react";
import Friend from './Friend';

const FriendsList = props => {

    const {
        friends,
        removeFriend,
        filterByFriend
    } = props;

    const renderFriend = (friend, index) => {

        console.log('friend: ', friend);

        let displayed;

        if (friend.display === undefined) {
            displayed = true;
        } else {
            displayed = friend.display;
        }

        if (displayed === true) {
            return (
                <Friend 
                    friend={friend} 
                    key={index} 
                    removeFriend={removeFriend}
                />
            );
        }

    }

    return (<>
                <nav className="panel">
                    <p className="panel-heading">
                        Friends List
                    </p>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                        <input className="input" type="text" onChange={filterByFriend} placeholder="Search Friends (by username)" />
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
                            return renderFriend(friend, index);
                        })
                    }
                </nav>
        
            </>
    )
};

export default FriendsList;