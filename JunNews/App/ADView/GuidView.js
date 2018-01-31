/**
* @providesModule GuidView
*
*/
import React, {Component} from 'react'

import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    TouchableOpacity,
    Image
}from 'react-native'
import Swiper from 'react-native-swiper';
import JunHighButton from "JunHighButton";
import AppConstant from 'AppConstant';
import MainView from "../Main/MainView";

export default class GuidView extends Component {
    render(){
        console.log('1--', this.props.navigator)
        return (
            <Swiper loop={false}
            >
                <Image style={{width:AppConstant.kScreenW, height:AppConstant.kScreenH}} source={{uri:'slider1'}}/>
                <View style={{alignItems:'center'}}>
                    <Image style={{width:AppConstant.kScreenW, height:AppConstant.kScreenH}} source={{uri:'slider2'}}/>
                    <JunHighButton title='立即体验'
                                   buttonStyle={styles.btnStyle}
                                   titleStyle={{color:'red', fontSize:18}}
                                   onPress={()=>{
                                       this.props.navigator.replace({
                                           component:MainView
                                       })
                                   }}
                    />

                </View>
            </Swiper>
        )
    }

}

// 样式表
var styles = StyleSheet.create({
    btnStyle: {
        position:'absolute',
        bottom:60,
        width:150,
        height:40,
        borderWidth:1,
        borderColor:'red',
        borderRadius:6
    }
})