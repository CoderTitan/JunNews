/*
 * @providesModule ReadView
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import JunNavigation from "JunNavigation";

export default class ReadView extends Component {
    constructor(props){
        super(props)

        this.state = {
            index:0
        }
    }

        //加载数据
    componentDidMount() {

    }
    render(){
        return(
            <View>
                <JunNavigation title='畅读'
                />
                <View style={{backgroundColor:'yellow', flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>要闻</Text>
                </View>
            </View>
        )
    }
}