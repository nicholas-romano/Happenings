import React, { useEffect, useState } from 'react';
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
                        Search Users
                    </p>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search Users" />
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                        </p>
                    </div>
                    
                    {
                        users.map((user, index = 1) => {
                            
                            if (user.userName !== thisUser) {
                                return <User user={user} key={index} addFriend={addFriend} actionType="add-friend" actionButton="Add Friend" />
                            }
                            
                        })
                    }
                </nav>
    )  
}

export default UsersList;