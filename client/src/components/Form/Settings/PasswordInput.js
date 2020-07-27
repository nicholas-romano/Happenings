import React from 'react';

const PasswordInput = props => {

    const {
        password,
        setNewPassword,
        enableFields,
        enableEdit,
        register,
        errors
    } = props;

    return (
        <div className="columns">
                    <div className="column is-one-fifth">
                        <label className="label">Change Password:</label>
                    </div>
                    <div className="columns is-four-fifths">
                        <div className="column is-four-fifths">
                            <input className="input" 
                                placeholder="No change"
                                type="password" 
                                name="password"
                                defaultValue={password}
                                disabled={enableFields.password ? false : true}
                                onChange={e => setNewPassword(e.target.value)}
                                ref={register({minLength: 8})}
                            />
                            {errors.password && <p className="error">Password must be at least 8 characters.</p>}
                        </div>
                        <div className="column is-one-fifth">
                            <button onClick={() => enableEdit('password')} className="button is-link">
                                <span className="fas fa-pencil-alt"></span>
                            </button>
                        </div>
                    </div>
        </div>
    )
}

export default PasswordInput;
