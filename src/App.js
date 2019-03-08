import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '26d1eabf83c44f9cb999d1fdfc33e4fb'
 });
 
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


class App extends Component {
  constructor() { //can we simplify setting of state here?
    super()
    this.state = {
      input: 'http://longhorn.ws/wp-content/themes/land5/images/sliders/slide1-mobile.jpg',
      imageUrl: '',
      test: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(this.state);
  }

  onButtonSubmit = () => {
    this.setState(
      { imageUrl: this.state.input },
      () => console.log('after setState', this.state)
    );
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      
    },
    function(err) {
      // there was an error
    }
  );
  }
  

  render() {
    return (
      <div className="App"> 
     <Particles className='particles'
     params={particlesOptions}
   />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
