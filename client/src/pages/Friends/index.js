import React, { useEffect, useState, useCallback } from "react";
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

    useEffect(() => {

        for (let i = 0; i < users.length; i++) {
            const user = users[i].userName;
            for (let j = 0; j < friendsUsernames.length; j++) {
                const friend = friendsUsernames[j].userName;
                if (user === friend) {
                    const deleteItem = users[i];
                    const newUserList = users.filter(user => user !== deleteItem);
                    setUsers(newUserList);
                }
            }
        }

    }, [users, friendsUsernames]);

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
            //console.log('get all users response: ', res);
            setUsers(res.data);
        })
        .catch(err => console.log('err: ', err))
    }

    const addFriend = userName => {
        API.addFriend(userName)
        .then(res => {
             console.log('Friend added: ', userName);
        })
        .catch(err => console.log('err: ', err));
    }

    const removeFriend = userName => {
        API.removeFriend(userName)
        .then(res => {
             console.log('Friend removed: ', userName);
        })
        .catch(err => console.log('err: ', err));
    }

    return (
        <>
            <Header />
            <div className="container-fluid">
                        <div className="columns">
                            <div className="column">
                                <UsersList users={users} thisUser={thisUser} addFriend={addFriend} />
                            </div>
                            <div className="column">
                                <FriendsList friends={friendsUsernames} removeFriend={removeFriend} />
                            </div>
                        </div>
            </div>  
            <Footer />
        </>
    )
};

export default Friends;