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
  View,
  NavigatorIOS
} from 'react-native';
import MainView from 'MainView'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS initialRoute={{
          component:MainView,
            title:'首页'
        }}
                      style={{flex:1}}
                      barTintColor='red'
                      titleTextColor='white'
        />
    );
  }
}

const styles = StyleSheet.create({
  
});
