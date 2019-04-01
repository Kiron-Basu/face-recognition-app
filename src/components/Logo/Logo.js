import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import cameraIcon from './camera-icon-medium.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
        <p className="f4 white">
            {'This app will detect faces in your pictures and blur them out'}
          </p>
            <Tilt className="Tilt ba2 shadow-2" options={{ max : 45 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa4"></div>
                <img alt='logo' src={cameraIcon}  />
            </Tilt>
        </div>
        );
}

export default Logo;