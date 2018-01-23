/*
 * @providesModule MineView
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class MineView extends Component {
    render(){
        return(
            <View style={{backgroundColor:'orange', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>我的</Text>
            </View>
        )
    }
}