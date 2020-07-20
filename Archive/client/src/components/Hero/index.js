import React from 'react';
import Logo from '../../assets/HappeningsLogo.png'

const styles = {
    topHead: {
        backgroundColor: 'rgba(36, 123, 160, 1)'
      },
      logo: {
        height: 200,
        width: 200
      }
}

const Hero = () => {

    return(
        <div className='hero'>
        <div className='hero-body' style={styles.topHead}>
          <img src={Logo} alt='Logo' style={styles.logo}/>
        </div>
      </div>
    );
}

export default Hero;