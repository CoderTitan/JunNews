/*
 * @providesModule Detail
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Detail extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#ed12ac', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text onPress={()=>{
                    this.props.navigator.push({
                        component:Detail
                    })

                }}>详情页</Text>
            </View>
        )
    }
}