
/**
 * @providesModule SettingView
 */
import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity

}from 'react-native'
import JunNavigation from 'JunNavigation'
import JunHighButton from  'JunHighButton'
import JunListViewHeader from 'JunListViewHeader'
import JunListView from "JunListView";
import AppConstant from "AppConstant";

export default class SettingView extends Component {

    constructor(props){
        super(props);

        var groups = [];

        // 加载第0组
        this.setupGroup0(groups);

        // 加载第1组
        this.setupGroup1(groups);

        this.state = {
            groups:groups
        }

    }


    // 加载第0组
    setupGroup0(groups){
        // 创建行模型
        var item0 = new JunListViewHeader.JunSwitchRowItem('','消息推送');
        var item1 = new JunListViewHeader.JunSwitchRowItem('','图书借阅');
        var item2 = new JunListViewHeader.JunArrowRowItem('','解绑设备');
        var group0 = new JunListViewHeader.JunSectionItem([item0,item1,item2],10);
        groups.push(group0);
    }

    // 加载第0组
    setupGroup1(groups){
        // 创建行模型
        var item0 = new JunListViewHeader.JunArrowRowItem('','意见反馈');
        var item1 = new JunListViewHeader.JunArrowRowItem('','关于技术圈');
        var group1 = new JunListViewHeader.JunSectionItem([item0,item1],10);
        groups.push(group1);
    }

    render(){

        return (
            <View style={{flex:1,backgroundColor:'green'}}>
                {/*<JunNavigation*/}
                    {/*title='设置'*/}
                    {/*titleStyle={styles.titleStyle}*/}
                    {/*leftBarButtonItem={this.renderLeftBarButtonItem()}*/}
                {/*/>*/}
                <JunListViewHeader.JunListView groups={this.state.groups}
                                                               groupListViewStyle={{backgroundColor:AppConstant.bgColor}}
                                                               navigator={this.props.navigator}
                                                               titleStyle={{color:'rgb(80,80,80)'}}
                                                               renderFooter={this._renderFooter.bind(this)}

                />
            </View>
        )

    }
    // 渲染底部视图
    _renderFooter(){
        return (
            <View style={styles.footViewStyle}>
                <TouchableOpacity style={styles.selectedStyle}>
                    <Text style={{color:'red'}}>立即登录</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderLeftBarButtonItem(){
        return (
            <CommonHighButton image='btn_backitem'
                              imageStyle={{width:30,height:30,position:'absolute',left:-30}}
                              onPress={()=>{
                                  this.props.navigator.pop();
                              }}

            />
        )
    }


}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    selectedStyle:{
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        width:AppConstant.kScreenW,
        height:35,
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle:{
        color:'black',fontSize:18
    },
    footViewStyle:{
        width:AppConstant.kScreenW,
        height:60,
    }
})

