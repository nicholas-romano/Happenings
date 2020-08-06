import React from 'react';

const Interest = props => {

    const {
        newInterest,
        interestList,
        deleteInterest,
        addToInterests
    } = props;

    return (
                <div className="columns">
                    <div className="column is-one-fifth">
                        <label className="label">Add Interest:</label>
                    </div>
                    <div className="columns is-four-fifths">
                        <div className="column is-four-fifths">
                            <div>
                                <input className="input" 
                                    type="text"
                                    placeholder="Add Interest"
                                    ref={newInterest}
                                />
                            </div>
                            <div className="list">
                                { (interestList.length > 0 ) ?
                                    <ul>
                                        {
                                            interestList.map((interest, index) => {
                                                index += 1;
                                                return (<li key={index}>{index}. {interest} 
                                                            <button className="delete-icon" onClick={() => deleteInterest(index)}>
                                                                <span className="fas fa-minus-circle"></span>
                                                            </button>
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
    )
}

export default Interest;