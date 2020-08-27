import React from "react";
import Friend from './Friend';

const FriendsList = props => {

    const {
        friends,
        removeFriend
    } = props;

    const renderFriend = (friend, index) => {

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