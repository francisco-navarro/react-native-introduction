import React, { Component } from "react";
import { Text, View } from 'react-native';

export default class HomeController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <Text>Home view</Text>
      </View>
    );
  }
}