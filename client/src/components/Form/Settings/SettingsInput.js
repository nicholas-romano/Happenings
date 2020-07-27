import React from 'react';

const SettingsInput = props => {

    const {
        label,
        value,
        enableFields,
        enableEdit,
        userData,
        setUserData,
        register,
        errors
    } = props;

    let pattern;
    let errMessage;

    switch(label) {
        case "Username:":
            pattern = /^[-\w]+$/;
            errMessage = 'cannot contain special characters or spaces.';
        break;
        case "First Name:":
        case "Last Name:":
            pattern = /^[A-Za-z]+$/;
            errMessage = 'cannot contain special characters, numbers, or spaces.';
        break;
        case "Email:":
            pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})$/;
            errMessage = 'invalid format';
        break;
    }

    return (
        <div className="columns">
                    <div className="column is-one-fifth">
                        <label className="label">{label}</label>
                    </div>
                    <div className="columns is-four-fifths">
                        <div className="column is-four-fifths">
                            <input className="input" type="text" 
                                placeholder="Text input"
                                name={label}
                                defaultValue={value}
                                disabled={enableFields[label] ? false : true}
                                onChange={e => setUserData({...userData, [label]: e.target.value})}
                                ref={register({required: true, minLength: 2, pattern: pattern})}
                            />
                            {errors[label] && errors[label].type === "required" && 
                                (<p className="error">{label} field is required.</p>)
                            }
                            {errors[label] && errors[label].type === "minLength" && 
                                (<p className="error">{label} field must be at least 2 characters.</p>)
                            }
                            {errors[label] && errors[label].type === "pattern" && 
                                (<p className="error">{label} {errMessage}</p>)
                            }
                        </div>
                        <div className="column is-one-fifth">
                            <button onClick={() => enableEdit([label])} className="button is-link">
                                <span className="fas fa-pencil-alt"></span>
                            </button>
                        </div>
                    </div>
        </div>
    )
}

export default SettingsInput;
