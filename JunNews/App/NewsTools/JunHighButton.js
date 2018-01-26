/**
 * @providesModule JunHighButton
 *
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
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

export default class JunHighButton extends Component {
    static propTypes = {
        //标题
        title: PropTypes.string,

        //图片
        image: PropTypes.string,
        highImage: PropTypes.string,

        //样式
        titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        highTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

        //监听事件
        onPress: PropTypes.func
    }

    render(){
        return (
            <TouchableOpacity style={[styles.btnStyle, this.props.buttonStyle]}
                              onPressIn={()=>{
                                  this.setState({
                                      highlighted:true
                                  })
                                  if (this.props.onPress) {
                                      this.props.onPress(this)
                                  }
                              }}
                              onPressOut={()=>{
                                  this.setState({
                                      highlighted:false
                                  })
                              }}
                              activeOpacity={this.props.highImage ? 1 : 0.5}
            >
                {/*标题*/}
                {this.props.title ? <Text style={this.state.highlighted && this.props.highTitleStyle ? this.props.highTitleStyle : this.props.titleStyle}>{this.props.title}</Text>}

                {/*图片*/}
                {this.props.image ? <Image style={[{marginLeft:3}, this.props.imageStyle]}
                                           source={{uri: this.state.highlighted && this.props.imageStyle ? this.props.highImage : this.props.image}}/>}
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