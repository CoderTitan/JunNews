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
  AsyncStorage,
    NavigatorIOS
} from 'react-native';
import MainView from 'MainView'
import GuidView from "GuidView"
import LaunchView from "LaunchView"


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    componentDidMount() {
        // setTimeout(this._guideApp.bind(this), 1000)
    }

    render() {
        return (
          <NavigatorIOS initialRoute={{
              component:MainView,
              title:''
            }}
                        style={{flex:1}}

                        // navigationBarHidden={true}
            />
        );
    }

    //判断是第几次进来
    _guideApp(){
        //读取本地缓存
        var isFirst = null

        AsyncStorage.getItem('isFirst', (error, result)=>{
            //判断是否是第一次
            isFirst = result

            //第一次启动引导页,记录
            if (isFirst) {
                this.navigator.replace({component:MainView})
            } else {
                //缓存
                AsyncStorage.setItem('isFirst', 'true', (error)=>{
                    if (error) {
                        alert('启动页启动次数缓存失败')
                    }
                })

                this.navigator.replace({component: GuidView})
            }
        })
    }
}

const styles = StyleSheet.create({
  
});
