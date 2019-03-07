import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import cameraIcon from './camera-icon-medium.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt ba2 shadow-2" options={{ max : 45 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa4"></div>
                <img alt='logo' src={cameraIcon}  />
            </Tilt>
        </div>
        );
}

export default Logo;