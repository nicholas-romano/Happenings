import React, { useContext } from 'react';
import ListItem from "./Friend";
import FriendsContext from "../../utils/FriendsContext";
import User from './User';


const UsersList = () => {

    const { users } = useContext(FriendsContext);
    const { thisUser } = useContext(FriendsContext);

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
                    <p className="panel-tabs">
                        <a className="is-active">All</a>
                        <a>Public</a>
                        <a>Private</a>
                        <a>Sources</a>
                        <a>Forks</a>
                    </p>
                    {
                        users.map((user, index = 1) => {
                            if (user.userName !== thisUser) {
                                return <User user={user} key={index} actionType="add-friend" actionButton="Add Friend" />
                            }
                        })
                    }
                    <div className="panel-block">
                        <button className="button is-link is-outlined is-fullwidth">
                        Reset all filters
                        </button>
                    </div>
                </nav>
    )  
}

export default UsersList;