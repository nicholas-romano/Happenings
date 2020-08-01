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
     const [userSearchQuery, setUserSearchQuery] = useState('');
     const [friendSearchQuery, setFriendSearchQuery] = useState('');

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
            window.location.reload();
        })
        .catch(err => console.log('err: ', err));
    }

    const removeFriend = userName => {
        console.log('removed friend from db ');
        API.removeFriend(userName)
        .then(res => {
            console.log('Friend removed: ', res);
            window.location.reload();
        })
        .catch(err => console.log('err: ', err));
    }

    //Filter by search input:
    const filterByUser = event => {

        const query = event.target.value;

        setUserSearchQuery(query);
           
            //add display: true/false to display the record if it matches the search string:
            const newUsersTable = users.map(user => {
                let name = user.lastName.toLowerCase();

                if (name.indexOf(userSearchQuery.toLowerCase()) !== -1) {
                    return {...user, display: true}
                } else {
                    return {...user, display: false}
                }
            });

            setUsers(newUsersTable);

    }

    const filterByFriend = event => {

        const query = event.target.value;

        setFriendSearchQuery(query);
           
            //add display: true/false to display the record if it matches the search string:
            const newFriendsTable = friendsUsernames.map(friend => {
                let name = friend.userName.toLowerCase();

                if (name.indexOf(friendSearchQuery.toLowerCase()) !== -1) {
                    return {...friend, display: true}
                } else {
                    return {...friend, display: false}
                }
            });

            setFriendsUsernames(newFriendsTable);

    }

    return (
        <>
            <Header />
                    <div className="columns">
                        <div className="column">
                            <UsersList users={users} thisUser={thisUser} filterByUser={filterByUser} addFriend={addFriend} />
                        </div>
                        <div className="column">
                            <FriendsList friends={friendsUsernames} filterByFriend={filterByFriend} removeFriend={removeFriend} />
                        </div>
                    </div>
            <Footer />
        </>
    )
};

export default Friends;