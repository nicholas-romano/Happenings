import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UsersList from "./UsersList";
import FriendsList from "./FriendsList";
import "./friends.css";
import API from "../../utils/API";
import AUTH from "../../utils/AUTH";

const Friends = () => {

     const [friendsUsernames, setFriendsUsernames] = useState([]);
     const [users, setUsers] = useState([]);
     const [thisUser, setThisUser] = useState('');

    useEffect(() => {
        getCurrentUser();
        getAllUsersInfo();
    }, []);

    const getCurrentUser = () => {
        AUTH.getUser()
        .then(res => {
            const userName = res.data.user.userName;
            setThisUser(userName);
            return getUserFriends(userName);
        })
        .catch(err => {
            console.log('err: ', err);
        })
    }

    const getUserFriends = userName => {
        API.getUserInfo(userName).then(res => {
            if (res.data[0].friends.length > 0) {
                setFriendsUsernames(res.data[0].friends);
                return;
            }
        })
    }

    const getAllUsersInfo = () => {
        API.getUsers().then(res => {
            console.log('get all users response: ', res);
            setUsers(res.data);
        })
        .catch(err => console.log('err: ', err))
    }

    return (
        <>
            <Header />
                    <div className="columns">
                        <div className="column">
                            <UsersList users={users} thisUser={thisUser} />
                        </div>
                        <div className="column">
                            <FriendsList friends={friendsUsernames} />
                        </div>
                    </div>
            <Footer />
        </>
    )
};

export default Friends;