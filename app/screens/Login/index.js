import React, { Component } from "react";
import { Text, View, Image, TouchableNativeFeedback, StyleSheet, TextInput } from 'react-native';

const pic = require('../../../assets/img/salva_sleeping.png');

export default class LoginController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>

        <Image style={{paddingBottom: 20}} source={pic}/>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          placeholder='Correo electronico'
          value={this.state.text}
        />

        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          placeholder='Contraseña'
          value={this.state.text}
        />

        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#ffcf0b'
  },
  buttonText: {
    padding: 10,
    color: 'white'
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15,
    width: 260,
  }
})