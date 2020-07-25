import React, { useEffect, useState } from 'react';
import SettingsInput from '../components/Form/Settings/SettingsInput';
import AUTH from '../utils/AUTH';

const Settings = () => {

    const [userData, setUserData] = useState({});

    const [enableFields, setEnabledFields] = useState({
        firstName: false,
        userName: false,
        lastName: false
    })

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        //console.log('user Data: ', userData);
    }, [userData]);

    useEffect(() => {
        //console.log('field enabled: ', enableFields);
    }, [enableFields]);

    const getUserData = () => {
        AUTH.getUser().then(res => {
           const { userName, firstName, lastName } = res.data.user;
           setUserData({ 
               "Username:": userName, 
               "First Name:": firstName, 
               "Last Name:": lastName
           });

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
            </div>
        </section>
        </>
    );
}

export default Settings;