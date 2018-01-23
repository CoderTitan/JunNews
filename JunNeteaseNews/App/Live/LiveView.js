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

        this.state = {
            index:0
        }
    }
    componentDidMount() {
        //加载数据
        var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?size=20'
        JunNetRequest.Get(url, null, (json) => {
            //所有数据集合
            var jsonArr = json['T1348647853363']


            this.setState({
                index:1
            })
            alert(index)
        }, (error) => {
            alert("网络错误, 请重新加载")
        })
    }

    render(){
        return(
            <View style={{backgroundColor:'green', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>直播</Text>
            </View>
        )
    }
}