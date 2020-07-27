import React from 'react';

const ProfileImage = props => {

    const {
        profileImg,
        imageRef,
        enableFields,
        enableEdit,
        selectImgLink
    } = props;

    let profile;

    if (profileImg === '') {
        profile = 'https://bulma.io/images/placeholders/96x96.png';
    } else {
        profile = profileImg;
    }

    return (
        <div className="columns">
                    <div className="column is-one-fifth">
                        <label className="label">Profile Image:</label>
                    </div>
                    <div className="columns is-four-fifths">
                        <div className="column is-four-fifths">
                            <div>
                                <img src={profile} width="96" alt="profile photo"/>
                            </div>
                            <div>
                                <label>Image link:</label>
                            </div>
                            <div>
                                <input className="input" type="text"
                                    placeholder="Image Link Input"
                                    defaultValue={profileImg} 
                                    disabled={enableFields.profileImg ? false : true}
                                    onFocus={() => selectImgLink()}
                                    ref={imageRef}
                                />
                            </div>
                        </div>
                        <div className="column is-one-fifth">
                            <button onClick={() => enableEdit('profileImg')} className="button is-link">
                                <span className="fas fa-pencil-alt"></span>
                            </button>
                        </div>
                    </div>
        </div>
    )
}

export default ProfileImage;