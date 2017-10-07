/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PushNotification from 'react-native-push-notification';
import PushController from './PushController';

const instructions = Platform.select({
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu. Otro com  ',
});



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {token: false};
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        
        <Text onPress={showNotification}> Show notification</Text>
        <PushController/>
      </View>
    );
  }
}



function showNotification () {
  // PushNotification.localNotification({
  //   message: 'Hello World!'
  // })
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
