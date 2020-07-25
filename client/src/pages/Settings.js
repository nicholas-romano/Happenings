import React, { useEffect, useState, useRef } from 'react';
import SettingsInput from '../components/Form/Settings/SettingsInput';
import ProfileImg from '../components/Form/Settings/ProfileImg';
import AUTH from '../utils/AUTH';
import ProfileImage from '../components/Form/Settings/ProfileImg';

const Settings = () => {

    const imageRef = useRef();
    const newInterest = useRef();
    const [userData, setUserData] = useState({});
    const [profileImg, setUserProfileImg] = useState('');
    const [interestList, setInterestList] = useState([]);

    const [enableFields, setEnabledFields] = useState({
        firstName: false,
        userName: false,
        lastName: false,
        profileImg: false
    })

    useEffect(() => {
        getUserData();
    }, []);

    // useEffect(() => {
    //     //console.log('user Data: ', userData);
    // }, [userData]);

    // useEffect(() => {
    //     //console.log('field enabled: ', enableFields);
    // }, [enableFields]);

     useEffect(() => {
         console.log('interest List: ', interestList);
     }, [interestList]);

    const getUserData = () => {
        AUTH.getUser().then(res => {
           const { userName, firstName, lastName, profileImg } = res.data.user;
           setUserData({ 
               "Username:": userName, 
               "First Name:": firstName,
               "Last Name:": lastName
           });
           if (profileImg !== undefined) {
            setUserProfileImg(profileImg)
           } else {
            setUserProfileImg('')
           }
        })
        .catch(err => console.log(err));
    }

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
        }
    }

    const deleteInterest = () => {
        console.log('delete index');
    }

    const userDataEntries = Object.entries(userData);

    return (
        <>
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
                                enableEdit={enableEdit}
                            />
                        )
                    })
                }
                <ProfileImage 
                    profileImg={profileImg}
                    imageRef={imageRef}
                    enableFields={enableFields}
                    enableEdit={enableEdit}
                    selectImgLink={selectImgLink}
                />
                <div className="columns">
                    <div className="column is-one-fifth">
                        <label className="label">Add Interest:</label>
                    </div>
                    <div className="columns is-four-fifths">
                        <div className="column is-four-fifths">
                            <div>
                                <input className="input" type="text"
                                    placeholder="Add Interest"
                                    ref={newInterest}
                                />
                            </div>
                            <div className="interestList">
                                { (interestList.length > 0 ) ?
                                    <ul>
                                        {
                                            interestList.map((interest, index) => {
                                                index += 1;
                                                return (<li key={index}>{index}. {interest} 
                                                            <span className="fas fa-minus-circle delete-icon" onClick={() => deleteInterest(index)}></span>
                                                        </li>)
                                            })
                                        }
                                    </ul>
                                : <p className="empty">Your interest list is empty.</p>
                                }
                                
                            </div>
                        </div>
                        <div className="column is-one-fifth">
                            <button onClick={() => addToInterests()} className="button is-link">
                                <span className="fas fa-plus"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Settings;