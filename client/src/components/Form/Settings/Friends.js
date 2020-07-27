import React from 'react';

const Friends = props => {

    const {
        friendsList,
        deleteFriend
    } = props;

    return (
                <div className="columns">
                    <div className="column is-one-fifth">
                        <label className="label">Friends:</label>
                    </div>
                    <div className="columns is-four-fifths">
                        <div className="column is-full">
                            <div className="list">
                                { (friendsList.length > 0 ) ?
                                    <ul>
                                        {
                                            friendsList.map((friend, index) => {
                                                index += 1;
                                                return (<li key={index}>{index}. {friend} 
                                                            <button className="delete-icon" onClick={() => deleteFriend(index, friendsList)}>
                                                                <span className="fas fa-minus-circle"></span>
                                                            </button>
                                                        </li>)
                                            })
                                        }
                                    </ul>
                                : <p className="empty">Your friends list is empty.</p>
                                }  
                            </div>
                        </div>
                    </div>
 
                </div>
    )
}

export default Friends;