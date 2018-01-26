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
// import PropTypes from 'prop-types'


var kScreenWidth = Dimensions.get('window').width;

export default class GuidView extends Component {
    render(){
        return (
            <View style={{backgroundColor:'red', flex:1}}/>
        )
    }

}

// 样式表
var styles = StyleSheet.create({
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})