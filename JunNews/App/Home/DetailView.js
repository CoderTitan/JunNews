/*
 * @providesModule DetailView
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import JunNetRequest from "JunNetRequest";
import JunHighButton from "JunHighButton";
import JunNavigation from "JunNavigation";

export default class DetailView extends Component {

    constructor(props){
        super(props)

        this.state = {
            body:''
        }
    }

    componentDidMount() {
        var url = 'http://c.3g.163.com/nc/article/' + this.props.newsID + '/full.html'

        //发送请求
        JunNetRequest.Get(url, null, (json) => {
            var data = json[this.props.newsID]
            var body = data.body
            var imgs = data.img

            //处理图片
            imgs.forEach((image, i) => {
                var ref = image.ref
                var src = image.src

                var imgHtml = '<img src="'+ src + '" width=100%>'

                body = body.replace(ref, imgHtml)
            })



            this.setState({
                body:body
            })
        }, (error) => {
            alert('请求失败')
        })
    }

    render(){
        return (
            <View>
                <JunNavigation
                    title='首页'
                    titleStyle={{color:'red', fontSize:18}}
                    leftBarButtonItem={this._backButton()}
                />
                <WebView style={{flex:1}}
                         source={{html: this.state.body}}
                />
            </View>
        )
    }

    //返回按钮
    _backButton(){
        return (
            <JunHighButton
                image="btn_backitem"
                onPress={()=>{

                }}
            />
        )
    }



}