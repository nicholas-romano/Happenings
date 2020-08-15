import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SettingsInput from './SettingsInput';
import PasswordInput from './PasswordInput';
import ProfileImage from './ProfileImg';
import Interest from './Interest';
import Friends from './Friends';
import { FormBtn } from '../../components/Form/FormBtn';
import API from '../../utils/API';

const Settings = props => {

    const {
        userProps
    } = props;

    // console.log('userProps in Settings: ', userProps);

    const imageRef = useRef();
    const newInterest = useRef();
    const [showModal, setModal] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const [ userExistsErr, setUserExistsErr] = useState(false);

    const [userData, setUserData] = useState({
        "Username:": '',
        "First Name:": '',
        "Last Name:": '',
        "Email:": ''
    });
    
    useEffect(() => {
        setUserData({
            ...userData,
            "Username:": userProps.userName,
            "First Name:": userProps.firstName,
            "Last Name:": userProps.lastName,
            "Email:": userProps.userEmail
        });
        setUserProfileImg(userProps.profileImg);
        setInterestList(userProps.userInterest);
        setFriendsList(userProps.friends);
    }, [userProps]);

    const [password, setNewPassword] = useState('');
    const [profileImg, setUserProfileImg] = useState('');
    const [interestList, setInterestList] = useState([]);
    const [friendsList, setFriendsList] = useState([]);

    const [enableFields, setEnabledFields] = useState({
        firstName: false,
        userName: false,
        lastName: false,
        profileImg: false,
        password: false
    });

    const enableEdit = field => {
        if (!enableFields[field]) {
            setEnabledFields({...enableFields, [field]: true});
        } else {
            setEnabledFields({...enableFields, [field]: false});
        }
    }

    const selectImgLink = event => {
        imageRef.current.select();
    }

    const addToInterests = () => {
        const interest = newInterest.current.value;
        if (interest !== '') {
            setInterestList([...interestList, interest]);
            newInterest.current.value = '';
            newInterest.current.focus();
        }
    }

    const deleteInterest = index => {
        const deleteItem = interestList[index - 1];
        const newList = interestList.filter(interest => interest !== deleteItem);
        setInterestList(newList);
    }

    const deleteFriend = index => {
        const deleteItem = friendsList[index - 1];
        const newList = friendsList.filter(friend => friend !== deleteItem);
        setFriendsList(newList);
    }

    const cancelChanges = () => {
        window.location.reload();
    }

    const handleFormSubmit = () => {
        const name =  userData["Username:"];
        const first = userData["First Name:"]
        const last = userData["Last Name:"]
        const email = userData["Email:"]
        const newPassword = password;
        const img = imageRef.current.value;
        const interestsList = interestList;
        const newFriends = friendsList;

        let updatedUser;

        if (newPassword === '') {
            //Password unchanged:
            //Update User account in the database:
            updatedUser = {
                userName: name,
                firstName: first,
                lastName: last,
                userEmail: email,
                profileImg: img,
                userInterest: interestsList,
                friends: newFriends
            };
            API.updateFriendsLists(name).then(res => {
                console.log('update user friends list: ', res);                                    
                API.updateReviewsComments(name).then(res => {
                    //console.log('Result comments: ', res);
                    if (res.data.error) {
                        //console.log('User already exists');
                        setUserExistsErr(true);
                    } else {
                        //console.log('Username changed successfully');
                        showSaveConfirmation();
                    }
                    API.updateReviewsUserName(name).then(res => {
                        //console.log('Result reviews: ', res);
                        API.updateUser(updatedUser).then(res => {
                            //console.log('Result User: ', res);
                            if (res.data.error) {
                                //console.log('User already exists');
                                setUserExistsErr(true);
                            } else {
                                //console.log('Username changed successfully');
                                showSaveConfirmation();
                            }
                        }).catch(err => {
                            console.log('err: ', err);
                        });
                    }).catch(err => {
                        console.log('err: ', err);
                    });
                }).catch(err => {
                    console.log('err: ', err);
                }); 
            }).catch(err => {
                console.log('err: ', err);
            });
        } else {
            //Password changed:
            //Update User account in the database:
            updatedUser = {
                userName: name,
                firstName: first,
                lastName: last,
                userEmail: email,
                password: newPassword,
                profileImg: img,
                userInterest: interestList,
                friends: newFriends
            };

            API.updateUser(updatedUser).then(res => {
                console.log('res: ', res);
                showSaveConfirmation();
            }).catch(err => {
                console.log('err: ', err)
            });
        }
        
    }

    const showSaveConfirmation = () => {
        setModal(true);
    };

    const closeSaveConfirmation = () => {
        setModal(false);
    }

    const userDataEntries = Object.entries(userData);

    return (
        <>
            <div className={showModal ? 'is-active modal' : 'modal'}>
                <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Save Successful</p>
                            <button className="delete" aria-label="close" onClick={closeSaveConfirmation}></button>
                        </header>
                        <section className="modal-card-body">
                            <p>Your account changes have been saved successfully.</p>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick={closeSaveConfirmation}>OK</button>
                        </footer>
                    </div>
                <button className="modal-close is-large" aria-label="close" onClick={closeSaveConfirmation}></button>
            </div>
            <Header /> 
            <div className="container-fluid">
                <section className="section settings">
                    <div className="container">
                        <h1 className="title">Settings</h1>
                        <h2 className="subtitle">
                            Account Info:
                        </h2>
                        {
                            userDataEntries.map((data, index) => {
                                return (
                                    <SettingsInput 
                                        key={index}
                                        label={data[0]}
                                        value={data[1]}
                                        enableFields={enableFields}
                                        userData={userData}
                                        setUserData={setUserData}
                                        enableEdit={enableEdit}
                                        register={register}
                                        errors={errors}
                                        userExistsErr={userExistsErr}
                                    />
                                )
                            })
                        }
                        <PasswordInput
                            password={password}
                            setNewPassword={setNewPassword}
                            enableFields={enableFields}
                            enableEdit={enableEdit}
                            register={register}
                            errors={errors}
                        />
                        <ProfileImage 
                            profileImg={profileImg}
                            imageRef={imageRef}
                            setUserProfileImg={setUserProfileImg}
                            enableFields={enableFields}
                            enableEdit={enableEdit}
                            selectImgLink={selectImgLink}
                        />
                        <Interest
                            newInterest={newInterest}
                            interestList={interestList}
                            deleteInterest={deleteInterest}
                            addToInterests={addToInterests}
                        />
                        <Friends 
                            friendsList={friendsList}
                            deleteFriend={deleteFriend}
                        />
                        <div className="columns">
                            <div className="column is-one-fifth">
                            </div>
                            <div className="columns is-four-fifths">
                                <div className="column">
                                    <div>
                                        <button onClick={() => cancelChanges()} className="button is-light">Cancel</button>
                                        <FormBtn onClick={handleSubmit(handleFormSubmit)}>Save</FormBtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Settings;