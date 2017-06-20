//import libs
import React, { Component } from 'react';
import { 
  View 
} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

//make comp
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzAwrixWueQb9Jx6Egwl319pDsUGPIOLs',
      authDomain: 'project--6873070059517609782.firebaseapp.com',
      databaseURL: 'https://project--6873070059517609782.firebaseio.com',
      projectId: 'project--6873070059517609782',
      storageBucket: 'project--6873070059517609782.appspot.com',
      messagingSenderId: '832897490799'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Auth' />
        <LoginForm />
      </View>
    );    
  }
}
//style it


//make it avai
export default App;
