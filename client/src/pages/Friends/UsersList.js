import React from 'react';
import User from './User';


const UsersList = props => {

    const {
        users,
        thisUser,
        addFriend
    } = props;

    return (
        <nav className="panel">
                    <p className="panel-heading">
                        Users List
                    </p>
                    {
                        users.map((user, index = 1) => {
                            
                            if (user.userName !== thisUser) {
                                return <User user={user} key={index} addFriend={addFriend} />
                            }
                            
                        })
                    }
                </nav>
    )  
}

export default UsersList;