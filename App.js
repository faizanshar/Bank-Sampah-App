import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootIndux from './src/auth/Indux';
import {Provider} from 'react-redux';
import store from './src/Store/Store'
import Splash from './src/auth/Splash'
import Indux from './src/auth/Indux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <NavigationContainer> */}
          {/* <RootIndux /> */}
          <Indux/>
        {/* </NavigationContainer> */}
      </Provider>
    );
  }
}
