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
import {Navigator} from 'react-native-deprecated-custom-components'
import GuidView from "GuidView"


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  /*
  render() {
    return (
      <NavigatorIOS initialRoute={{
          component:GuidView
        }}
                      style={{flex:1}}
                      barTintColor='white'
                      titleTextColor='red'
        />
    );
  }
  */
    render(){

        return (
            <Navigator initialRoute={{
                component:GuidView
            }}
                       renderScene={this._renderScene.bind(this)}

            />
        )

    }

    // 渲染组件
    _renderScene(route, navigator){
        return (<route.component navigator={navigator} {...route} />)
    }
}

const styles = StyleSheet.create({
  
});


/*
*
*
    */