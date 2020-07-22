import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Dashboard(props) {

    return (
        <>
            <div>
                <Header />
            </div>

            <div className='columns is-dekstop'>
                <div className='column is-two-thirds'>
                    <p>Map goes here!!!!!!!!</p>

                </div>
                <div className='column is-one-third'>
                    <p>Your user review modal goes here!!</p>
                </div>
                <div className='column is-full'>
                    <p>Review feed goes here!!</p>
                    <p>Review feed goes here!!</p>
                    <p>Review feed goes here!!</p>
                    <p>Review feed goes here!!</p>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Dashboard;