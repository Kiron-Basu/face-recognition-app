import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import cameraIcon from './camera-icon-medium.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
        <Tilt className="Tilt ba2 shadow-2" options={{ max : 45 }} style={{ height: 97, width: 102 }} >
                <div className="Tilt-inner"></div>
                <img alt='logo' src={cameraIcon}  />
            </Tilt>
        <p className="f4 white">
            {'This app will detect faces in your pictures and blur them out'}
          </p>
        </div>
        );
}

export default Logo;