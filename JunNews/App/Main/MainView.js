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
    Text,
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
                {this._renderTabbarItems(0, 10, <HomeView navigator={this.props.navigator}/>)}

                {/*要闻*/}
                {this._renderTabbarItems(1, 5, <ReadView navigator={this.props.navigator}/>)}

                {/*直播*/}
                {this._renderTabbarItems(2, 0, <LiveView navigator={this.props.navigator}/>)}

                {/*视频*/}
                {this._renderTabbarItems(3, 0, <VideoView navigator={this.props.navigator}/>)}

                {/*我的*/}
                {this._renderTabbarItems(4, 0, <MineView navigator={this.props.navigator}/>)}
            </TabNavigator>
        )
    }

    _renderTabbarItems(selectIndex, badgeText, component){

        var titles = ['首页', '畅读', '直播', '视频', '我的']
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
                              renderBadge={badgeText > 0 ? this._renderBadge.bind(this, badgeText) : null}
                              selected={this.state.selectIndex == selectIndex}
            >
                {component}
            </TabNavigatorItem>
        )
    }

    _renderBadge(text){
        return (
            <View style={styles.badgeStyle}>
                <Text style={{color:'white', fontSize:10}}>{text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width:22,
        height:22
    },
    badgeStyle:{
        width:20,
        height:16,
        marginTop:3,
        marginLeft:3,
        backgroundColor:'red',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    }
})