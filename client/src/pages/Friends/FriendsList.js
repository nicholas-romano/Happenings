import React from "react";
import Friend from './Friend';

const FriendsList = props => {

    const {
        friends,
        removeFriend
    } = props;

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
                            return <Friend friend={friend} key={index} removeFriend={removeFriend} />
                        })
                    }
                </nav>
        
            </>
    )
};

export default FriendsList;