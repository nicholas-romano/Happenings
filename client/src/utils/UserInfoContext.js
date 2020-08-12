import React from 'react';

const UserInfoContext = React.createContext({
    userName: '',
    firstName: '',
    lastName: '',
    userEmail: '',
    password: '',
    profileImg: '',
    friends: [],
    userInterest: []
});

export default UserInfoContext;