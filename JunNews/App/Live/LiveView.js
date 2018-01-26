/*
 * @providesModule LiveView
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import JunNetRequest from 'JunNetRequest'


export default class LiveView extends Component {
    constructor(props){
        super(props)

        
    }


    render(){
        return(
            <View style={{backgroundColor:'green', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>直播</Text>
            </View>
        )
    }
}