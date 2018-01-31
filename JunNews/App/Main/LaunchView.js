/**
 * @providesModule LaunchView
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
}from 'react-native'
import AppConstant from "AppConstant";

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class LaunchView extends Component {

    render(){
        return (
            <Image source={{uri:'LaunchImage'}} style={{width:AppConstant.kScreenW,height:AppConstant.kScreenH}}/>
        )
    }
}

