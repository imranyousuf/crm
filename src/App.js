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
import firebase from 'firebase';
import Login from './Login';



export default class App extends Component<Props> {

  state = {
    loggedIn: null
  };

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyCRz-U4ruGNXI3raUPrrja6T2hYvrQb2SA",
        authDomain: "crmlinkedin-38d22.firebaseapp.com",
        databaseURL: "https://crmlinkedin-38d22.firebaseio.com",
        projectId: "crmlinkedin-38d22",
        storageBucket: "",
        messagingSenderId: "941671134879"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
