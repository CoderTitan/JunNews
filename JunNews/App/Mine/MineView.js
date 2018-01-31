/*
 * @providesModule MineView
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
import JunListView from "JunListView";
import JunListViewHeader from 'JunListViewHeader'
import AppConstant from "AppConstant";
import SettingView from "SettingView";

export default class MineView extends Component {
    constructor(props){
        super(props)

        var groups = []

        //第0组数据
        this.setupGroup0(groups);

        //第一组数据
        this.setupGroup1(groups);

        this.state = {
            groups:groups
        }
    }

    // 加载第0组
    setupGroup0(groups){
        // 创建行模型
        var item0 = new JunListViewHeader.JunArrowRowItem('icon_mine_myAccount_address','我的畅读','每天进步一点点');
        var item1 = new JunListViewHeader.JunArrowRowItem('icon_mine_myAccount_livingCity','我的成就','React native');
        var item2 = new JunListViewHeader.JunArrowRowItem('icon_mine_myAccount_password','年薪100万','我只是开个玩笑');
        var item3 = new JunListViewHeader.JunSwitchRowItem('icon_mine_myAccount_phone','笔记','');
        var group0 = new JunListViewHeader.JunSectionItem([item0,item1,item2,item3],0);
        groups.push(group0);
    }

    // 加载第0组
    setupGroup1(groups){
        // 创建行模型
        var item0 = new JunListViewHeader.JunArrowRowItem('icon_mine_myAccount_securityQuestion','收藏');
        var item1 = new JunListViewHeader.JunSwitchRowItem('icon_mine_myAccount_setBirthday','用户指南');
        var item2 = new JunListViewHeader.JunArrowRowItem('icon_mine_myAccount_username','我','');
        var item3 = new JunListViewHeader.JunArrowRowItem('icon_mine_member_instructions','设置','');
        item3.route = {
            component:SettingView,
        }

        var group1 = new JunListViewHeader.JunSectionItem([item0,item1,item2,item3],20);
        groups.push(group1);
    }

    render(){
        return(
            <View>
                <JunListView sectionItems={this.state.groups}
                             listViewStyle={{height:AppConstant.kScreenH - 64-49, marginTop:64}}
                             imageStyle={{width:17, height:17}}
                             subTitleStyle={{position:'absolute', right:15}}
                             renderHeader={this._renderHeader.bind(this)}
                             navigator={this.props.navigator}
                />
            </View>
        )
    }

    //渲染头部
    _renderHeader(){
        return (
            <ImageBackground style={styles.headerViewStyle} source={{uri:'mine'}} resizeMode='stretch'>
                <View style={{width:100, height:120}}>
                    <Image style={{width:80, height:80}} source={{uri:'person'}}/>
                    <View style={styles.nameViewStyle}>
                        <Text style={styles.nameStyle}>{'未登录用户'}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

var styles = StyleSheet.create({
    headerViewStyle:{
        width:AppConstant.kScreenW,
        height:250,
        justifyContent:'center',
        alignItems:'center'
    },
    nameViewStyle:{
        width:100,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 1, 0)'
    },
    nameStyle:{
        lineHeight:20,
        color:'white',
        fontSize:17
    }
})