import React from 'react';
import { Text, View } from 'react-native';

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //Toggle state every second
    setInterval(() => 
      this.setState(prev => ({showText: !prev.showText})),
      1000
    );
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends React.Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
