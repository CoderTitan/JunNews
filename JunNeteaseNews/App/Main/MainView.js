/*
 * @providesModule MainView
 *
 * */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    View,
    Image,
    NavigatorIOS
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
import HomeView from 'HomeView'
import ReadView from 'ReadView'
import LiveView from 'LiveView'
import VideoView from 'VideoView'
import MineView from 'MineView'

//程序入口组件
export default class MainView extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectIndex:0
        }
    }

    render(){
        return(
            <TabNavigator>
                {/*首页*/}
                {this._renderTabbarItems(0, HomeView)}

                {/*要闻*/}
                {this._renderTabbarItems(1, ReadView)}

                {/*直播*/}
                {this._renderTabbarItems(2, LiveView)}

                {/*视频*/}
                {this._renderTabbarItems(3, VideoView)}

                {/*我的*/}
                {this._renderTabbarItems(4, MineView)}
            </TabNavigator>
        )
    }

    _renderTabbarItems(selectIndex, Component){

        var titles = ['首页', '要闻', '直播', '视频', '我的']
        var icons = ['news', 'importantNews', 'live', 'video', 'me']
        var normalIcon = 'tabbar_icon_' + icons[selectIndex] + '_normal'
        var highlightIcon = 'tabbar_icon_' + icons[selectIndex] + '_highlight'

        return (
            <TabNavigatorItem title={titles[selectIndex]}
                              selectedTitleStyle={{color:'#cd423a'}}
                              renderIcon={()=><Image source={{uri:normalIcon}}
                                                     style={styles.iconStyle}
                                                     resizeMode='contain'
                              />}
                              renderSelectedIcon={()=><Image source={{uri:highlightIcon}}
                                                              style={styles.iconStyle}
                                                              resizeMode='contain'
                              />}
                              onPress={()=>{
                                  this.setState({
                                      selectIndex:selectIndex
                                  })
                              }}
                              selected={this.state.selectIndex == selectIndex}
            >
                <Component/>
            </TabNavigatorItem>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width:22,
        height:22
    }
})