import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Nav from '../../components/Nav'
import LocationSearch from '../../components/LocationSearch/locSearch';

const styles = {
    twothirds: {
      paddingBottom: 10,
      backgroundColor: 'rgba(183, 209, 218, 1)'
    },
    onethird: {
      backgroundColor: 'rgba(163, 124, 64, 1)'
    }
}

function Dashboard(props) {

    return (
        <>
        <div>
         <Nav />

        </div>
            <div>
                <Header />
            </div>
            <div className='colums'>
                <div className='column'>
                    <LocationSearch />
                </div>
            </div>

            <div className='columns is-dekstop'>
                <div className='column is-two-thirds' style={styles.twothirds}>
                    <p>Map goes here!!!!!!!!</p>

                </div>
                <div className='column is-one-third' style={styles.onethird}>
                    <p>Your user review modal goes here!!</p>
                </div>
            </div>
            <div className='columns is-desktop' style={styles.onethird}>

                <div className='column '>
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