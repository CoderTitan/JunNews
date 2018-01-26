/*
 * @providesModule VideoView
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class VideoView extends Component {
    render(){
        return(
            <View style={{backgroundColor:'cyan', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>视频</Text>
            </View>
        )
    }
}