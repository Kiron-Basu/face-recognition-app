
import React, { Component } from 'react';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 400
        }
      }
    }
  }
class ParticlesNoRerendering extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
    render() {
      return (
        <Particles className='particles'
          params={particlesOptions}
        />
      )
    }
}

export default ParticlesNoRerendering;