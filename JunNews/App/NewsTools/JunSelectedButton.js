/**
 * @providesModule JunSelectedButton
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
import PropTypes from 'prop-types'


var kScreenWidth = Dimensions.get('window').width;

export default class JunSelectedButton extends Component {
    static propTypes = {
        //标题
        title: PropTypes.string,

        //图片
        image: PropTypes.string,
        selectedImage: PropTypes.string,

        //样式
        titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        selectedTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

        //监听事件
        onPress: PropTypes.func
    }

    render(){
        return (
            <TouchableOpacity style={[styles.btnStyle, this.props.buttonStyle]}
                              onPress={()=>{
                                  if (this.props.onPress) {
                                      this.props.onPress(this)
                                  }
                              }}
            >
                {/*标题*/}
                {this.props.title ? <Text style={this.state.selected && this.props.selectedTitleStyle ? this.props.selectedTitleStyle : this.props.titleStyle}>{this.props.title}</Text>}

                {/*图片*/}
                {this.props.image ? <Image style={[{marginLeft:3}, this.props.imageStyle]}
                                           source={{uri: this.state.selected && this.props.imageStyle ? this.props.selectedImage : this.props.image}}/>}
            </TouchableOpacity>
        )
    }

}

// 样式表
var styles = StyleSheet.create({
    btnStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})