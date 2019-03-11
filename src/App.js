import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin  from './components/Signin/Signin';
import Register  from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import ParticlesNoRerendering from './components/ParticlesNoRerender/ParticlesNoRerender';

const app = new Clarifai.App({
  apiKey: '26d1eabf83c44f9cb999d1fdfc33e4fb'
 });

class App extends Component {
  constructor() { //can we simplify setting of state here?
    super()
    this.state = {
      input: 'http://longhorn.ws/wp-content/themes/land5/images/sliders/slide1-mobile.jpg',
      imageUrl: '',
      box: [],
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

   calculateFaceLocation = (data) => {
    let res = [];
 
    const inputImage = document.getElementById('inputImg');
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
 
    for (let reg of data.outputs[0].data.regions) {
 
      res.push({
        topRow: height * reg.region_info.bounding_box.top_row,
        bottomRow: height - height*reg.region_info.bounding_box.bottom_row,
        leftCol: width * reg.region_info.bounding_box.left_col,
        rightCol: width - width*reg.region_info.bounding_box.right_col
      });
    }
    
    return res;
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    this.setState(
      { imageUrl: this.state.input },
      () => console.log('after setState', this.state)
    );
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
   const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App"> 
     <ParticlesNoRerendering className='particles'/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
        ? 
        <div> 
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
        : (
          route === 'signin'
          ?   <Signin onRouteChange={this.onRouteChange}/>
          :  <Register onRouteChange={this.onRouteChange} />
           )
        }
      </div>
    );
  }
}

export default App;
