import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends React.Component {
  render () {
    let pic = require('../assets/img/salva_sleeping.png');
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

// AppRegistry.registerComponent('AwesomeProject', () => Bananas);