/**
 * @providesModule JunNavigation
 *
 * 使用详情:
 * 1.如果要调整中间,左边,右边View,需要通过position调整
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
    Platform
}from 'react-native'
import PropTypes from 'prop-types'


var kScreenWidth = Dimensions.get('window').width;

export default class JunNavigation extends Component {
    static propTypes = {
        //中间标题
        title: PropTypes.string,
        titleView: PropTypes.object,

        //左边
        leftBarButtonItem: PropTypes.object,
        leftBarButtonItems: PropTypes.array,

        //右边
        rightBarButtonItem: PropTypes.object,
        rightBarButtonItems: PropTypes.array,

        // 样式
        titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        barStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    }


    render(){
        return(
            <View style={[styles.barStyle, this.props.barStyle]}>
                <View style={styles.contentStyle}>
                    {/*左边*/}
                    <View style={styles.sidebarStyle}>
                        {this.props.leftBarButtonItem}
                    </View>
                    {/*中间*/}
                    <View style={styles.middleStyle}>
                        {this.props.title ? <Text style={styles.titleStyle}>{this.props.title}</Text> : this.props.titleView}
                    </View>
                    {/*右边*/}
                    <View style={styles.sidebarStyle}>
                        {/*{this.props.rightBarButtonItems.length > 0 ? this.props.rightBarButtonItems : this.props.rightBarButtonItem}*/}
                    </View>
                </View>
            </View>
        )
    }

}

// 样式表
var styles = StyleSheet.create({
    barStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        width: kScreenWidth,
        backgroundColor:'white',
        borderBottomWidth:2,
        borderBottomColor:'#e8e8e8'
    },
    contentStyle:{
        height:44,
        marginTop:Platform.OS == 'ios' ? 20 : 0,
        width:kScreenWidth,
        backgroundColor:'transparent',
        flexDirection:'row'
    },
    sidebarStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    middleStyle:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    }

})