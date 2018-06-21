/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import Login from './Login';
import Loader from "./Loader";
import PeopleList from "./PeopleList";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/peopleReducer';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


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

    firebase.auth().onAuthStateChanged((user) =>{
        if (user){
            this.setState({ loggedIn: true });
        }else{
            this.setState({ loggedIn: false });
        }
    });
  }

  renderInitialView(){
      switch (this.state.loggedIn){
          case true:
              return <PeopleList />
          case false:
              return <Login />
          default:
              return <Loader size="large"/>
      }
  }



  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
              {this.renderInitialView()}
          </View>
        </Provider>
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
