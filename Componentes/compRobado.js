import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Foto extends Component {
  render() {
    let pic = {
      uri: 'http://3.bp.blogspot.com/-rJ2hmGPHiTg/Vdc43Z_V2OI/AAAAAAAATCE/2O0uDQN5pRQ/s1600/suma.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
