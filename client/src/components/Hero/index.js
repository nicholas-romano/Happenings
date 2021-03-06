import React from 'react';
import Logo from '../../assets/HappeningsLogo.png'

const styles = {
    topHead: {
        backgroundColor: 'rgba(36, 123, 160, 1)',
        marginTop: -12
      },
      logo: {
        height: 160,
        width: 160
      }
}

const Hero = () => {

    return(
        <div className='hero'>
        <div className='hero-body p-0' style={styles.topHead}>
          <img src={Logo} alt='Logo' style={styles.logo}/>
        </div>
      </div>
    );
}

export default Hero;