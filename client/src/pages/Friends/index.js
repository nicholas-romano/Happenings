import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UsersList from "./UsersList";
import FriendsList from "./FriendsList";
import "./friends.css";
import API from "../../utils/API";
import AUTH from "../../utils/AUTH";
import FriendsContext from "../../utils/FriendsContext";

const Friends = () => {

     const [friendsUsernames, setFriendsUsernames] = useState([]);
     const [users, setUsers] = useState([]);
     const [thisUser, setThisUser] = useState('');
     const [addButtonDisabled, setAddButtonDisabled] = useState(false)

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


    const addFriend = userName => {
        console.log('add friend to db ');
        API.addFriend(userName)
        .then(res => {
            console.log('Friend added: ', res);
        })
        .catch(err => console.log('err: ', err));
    }

    const removeFriend = userName => {
        console.log('remove friend from db ');
    }

    const handleActionButton = (actionType, userName) => {
        console.log('userName added: ', userName);
        if (actionType === "add-friend") {
            setAddButtonDisabled(true);
            addFriend(userName);
        } else if (actionType === "remove-friend") {
            removeFriend(userName);
        }
    }

    return (<>
        <Header />
            <FriendsContext.Provider value={{ friendsUsernames, users, thisUser, handleActionButton, addButtonDisabled }}>
                <div className="columns">
                    <div className="column">
                        <UsersList />
                    </div>
                    <div className="column">
                        <FriendsList />
                    </div>
                </div>
            </FriendsContext.Provider>
        <Footer />
    </>)
};

export default Friends;