import React, { Component } from "react";
import { Platform, Text } from 'react-native';
import PushNotification from 'react-native-push-notification';


export default class PushController extends Component {
  constructor(props) {
    super(props);
    this.state = {token: false};
  }
  componentDidMount() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log( 'TOKEN:', token );
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        PushNotification.localNotification({
          title: notification.title,
          message: notification.body,
          largeIcon: "icon", // (optional) default: "ic_launcher"
          smallIcon: "ic_launcher", // (optional) default: "ic_notification" with fallback for "ic_launcher"
          color: "#ffcf0b",
          smallText: notification.body
        })
      },
      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "982455190908",
      requestPermissions: true
    });
  }
  render() {
    return null;
  }
}