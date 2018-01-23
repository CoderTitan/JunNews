/*
 * @providesModule HomeNewsCell
 *
 * */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
}from 'react-native'
import PropTypes from 'prop-types'
import DetailView from 'DetailView'

//全屏的宽
var kScreenWidth = Dimensions.get('window').width


export default class HomeNewsCell extends Component {
    static propTypes = {
        rowData: PropTypes.object
    }

    render(){
        return (
            <TouchableOpacity style={{flexDirection:'column', justifyContent:'space-between'}}
                              onPress={this._cellSelectorAction.bind(this)}
            >
                <View style={styles.cellStyle}>
                    {/*图片*/}
                    <Image source={{uri: this.props.rowData.imgsrc}} style={{width:100, height:75}}/>
                    {/*右边view*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.titleStyle}  numberOfLines={2}>{this.props.rowData.title}</Text>
                        <View style={styles.bottomViewStyle}>
                            <Text style={styles.bottomTextStyle}>{this.props.rowData.ptime}</Text>
                            <View style={{backgroundColor:'#efefef', borderRadius:12.5}}>
                                <Text style={[styles.bottomTextStyle]}>{'  ' + this.props.rowData.replyCount + '跟帖  '}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/*分割线*/}
                <View style={styles.lineStyle}/>
            </TouchableOpacity>
        )
    }

    //cell点击跳转
    _cellSelectorAction(){
        this.props.navigator.push({
            component:DetailView,
            title:'新闻详情页',
            passProps:{
                newsID:this.props.rowData.id
            }
        })
    }
}

var styles = StyleSheet.create({
    cellStyle:{
        padding:10,
        flexDirection:'row'
    },
    rightViewStyle:{
        flex:1,
        marginLeft:10,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    titleStyle:{
        height:50,
        fontSize:18,
    },
    bottomViewStyle:{
        height:25,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottomTextStyle:{
        lineHeight:25,
        color:'#979797',
        fontSize:14
    },
    lineStyle:{
        width:kScreenWidth,
        height:1,
        backgroundColor:'#efefef'
    }
})