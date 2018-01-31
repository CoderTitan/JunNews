/**
 * @providesModule JunRowCell
 */


import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    PixelRatio,
    Switch

}from 'react-native'
import PropTypes from 'prop-types'
import AppConstant from "../NewsTools/AppConstant";


export default class JunRowCell extends Component {

    static propTypes = {
        rowData: PropTypes.object
    }

    constructor(props){
        super(props)

        this.state = {
            isOn: false
        }

        // 判断下当前是否是开关,如果是开关,就不能设置子标题
        var className = this.props.rowData.constructor.name;
        if (className == 'JunSwitchRowItem') {
            //判断子标题
            if (this.props.rowData.subtitle) {
                throw '开关模型,不允许设置子标题';
            }
        }
    }

    render(){
        return (
            <TouchableOpacity style={styles.cellStyle}
                              disabled={this.props.rowData.disabled}
                              onPress={()=>{
                                  if (this.props.rowData.clickCell) {
                                      this.props.rowData.clickCell()
                                  }

                                  if (this.props.rowData.route) {
                                      var route = this.props.rowData.route
                                      route.navigator = this.props.navigator
                                      this.props.navigator.push(route)
                                  }
                              }}
            >
                {/*图片*/}
                {this.props.rowData.image ? <Image style={[styles.imageStyle, this.props.imageStyle]} source={{uri:this.props.rowData.image}}/> : null}
                {/*标题*/}
                <Text style={[this.props.titleStyle, {marginLeft:10}]}>{this.props.rowData.title}</Text>
                {/*子标题*/}
                <Text style={[this.props.subTitleStyle, {marginRight:10}]}>{this.props.rowData.subTitle}</Text>
                {/*右侧箭头/开关*/}
                {this._renderAccessoryView()}
            </TouchableOpacity>
        )
    }

    //渲染右侧视图,箭头or开关
    _renderAccessoryView(){
        // 获取当前对象的构造方法 => 类名
        var className = this.props.rowData.constructor.name;

        if (className == 'JunArrowRowItem') {//箭头
            return(
                <Image source={{uri:'icon_shike_arrow'}} style={styles.arrowStyle}/>
            )
        }else if (className == 'JunSwitchRowItem') {
            return(
                <Switch style={styles.switchStyle}
                        value={this.state.isOn}
                        onValueChange={(newValue)=>{
                            this.setState({
                                isOn:newValue
                            })
                        }}
                />
            )
        }
    }
}

var styles = StyleSheet.create({
    cellStyle:{
        height:44,
        width:AppConstant.kScreenW,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1 / PixelRatio.get(),
        borderBottomColor:'#e5e5e5'
    },
    imageStyle:{
        width:25,
        height:25,
        marginLeft:10
    },
    switchStyle:{
        position:'absolute',
        right:10
    },
    arrowStyle:{
        width:7,
        height:12,
        position:'absolute',
        right:10
    }
})