import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform, Text, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import PushNotification from 'react-native-push-notification';
import PushController from './components/Push/index';
import LoginContainer from './screens/Login/container';
import HomeController from './screens/Home/index';
import styles from './config/styles';
import { makeStore } from './config/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {token: false};
    this.store = makeStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <Text style={styles.title}>Salva</Text>
          <Router>
            <Stack key="root">
              <Scene key="login" component={LoginContainer} title="Login"/>
              <Scene key="register" component={HomeController} title="Register"/>
            </Stack>
          </Router>
          <PushController/>
        </View>
      </Provider>
    );
  }
}
