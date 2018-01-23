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

export default class ReadView extends Component {
    constructor(props){
        super(props)

        this.state = {
            index:0
        }
    }

        //加载数据
    componentDidMount() {
            var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?size=20'
            fetch(url)
            .then((response)=>response.json())
            .then((json)=>{
                //请求成功
                this.setState({
                    index:1
                })
                alert(this.state.index)
                console.log(this.state.index)
            })
            .catch((error)=>{
                console.log(error)
                alert('请求失败')
            })
    }
    render(){
        return(
            <View style={{backgroundColor:'yellow', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>要闻</Text>
            </View>
        )
    }
}