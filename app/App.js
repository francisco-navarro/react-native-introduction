/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import PushNotification from 'react-native-push-notification';
import PushController from './components/Push/index';
import LoginController from './screens/Login/index'
import styles from './config/styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {token: false};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Salva</Text>
        <LoginController/>        
        <PushController/>
      </View>
    );
  }
}
