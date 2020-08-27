import React from 'react';
import User from './User';


const UsersList = props => {

    const {
        users,
        thisUser,
        addFriend
    } = props;

    const renderUser = (user, index) => {

        let displayed;

        if (user.display === undefined) {
            displayed = true;
        } else {
            displayed = user.display;
        }

        if (displayed === true) {
            return (
                <User 
                    user={user} 
                    key={index} 
                    addFriend={addFriend} 
                />
            );
        }

    }

    return (
        <nav className="panel">
                    <p className="panel-heading">
                        Users List
                    </p>
                    {
                        users.map((user, index = 1) => {
                            
                            if (user.userName !== thisUser) {
                                return renderUser(user, index);
                            }
                            
                        })
                    }
                </nav>
    )  
}

export default UsersList;