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
    Text,
    View,
    TouchableOpacity,
    Button,
    TextInput,
    Image,
    Dimensions,
    NavigatorIOS
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
import HomeView from 'HomeView'



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
                <TabNavigatorItem title="首页"
                                  selectedTitleStyle={{color:'#cd423a'}}
                                  renderIcon={()=><Image source={{uri:'tabbar_icon_me_normal'}}
                                                         style={styles.iconStyle}
                                  />}
                                  renderselectedicon={()=><Image source={{uri:'tabbar_icon_news_highlight'}}
                                                                 style={styles.iconStyle}
                                  />}
                                  onPress={()=>{
                                      this.setState({
                                          selectIndex:0
                                      })
                                  }}
                                  selected={this.state.selectIndex == 0}
                >
                    <HomeView navigator={this.props.navigator}/>
                </TabNavigatorItem>

                {/*要闻*/}
                <TabNavigatorItem title="要闻"
                                  selectedTitleStyle={{color:'#cd423a'}}
                                  renderIcon={()=><Image source={{uri:'tabbar_icon_importantNews_normal'}}
                                                         style={{width: 15, height:20}}
                                  />}
                                  renderselectedicon={()=><Image source={{uri:'tabbar_icon_importantNews_highlight'}}
                                                                 style={styles.iconStyle}
                                  />}
                                  onPress={()=>{
                                      this.setState({
                                          selectIndex:1
                                      })
                                  }}
                                  selected={this.state.selectIndex == 1}
                >
                    <View style={{flex:1, backgroundColor:'green'}}/>
                </TabNavigatorItem>

                {/*直播*/}
                <TabNavigatorItem title="直播"
                                  selectedTitleStyle={{color:'#cd423a'}}
                                  renderIcon={()=><Image source={{uri:'tabbar_icon_live_normal'}}
                                                         style={{width: 20, height:17}}
                                  />}
                                  renderselectedicon={()=><Image source={{uri:'tabbar_icon_live_highlight'}}
                                                                 style={styles.iconStyle}
                                  />}
                                  onPress={()=>{
                                      this.setState({
                                          selectIndex:2
                                      })
                                  }}
                                  selected={this.state.selectIndex == 2}
                >
                    <View style={{flex:1, backgroundColor:'orange'}}/>
                </TabNavigatorItem>

                {/*视频*/}
                <TabNavigatorItem title="视频"
                                  selectedTitleStyle={{color:'#cd423a'}}
                                  renderIcon={()=><Image source={{uri:'tabbar_icon_video_normal'}}
                                                         style={styles.iconStyle}
                                  />}
                                  renderselectedicon={()=><Image source={{uri:'tabbar_icon_video_highlight'}}
                                                                 style={styles.iconStyle}
                                  />}
                                  onPress={()=>{
                                      this.setState({
                                          selectIndex:3
                                      })
                                  }}
                                  selected={this.state.selectIndex == 3}
                >
                    <View style={{flex:1, backgroundColor:'yellow'}}/>
                </TabNavigatorItem>

                {/*我的*/}
                <TabNavigatorItem title="我的"
                                  selectedTitleStyle={{color:'#cd423a'}}
                                  renderIcon={()=><Image source={{uri:'tabbar_icon_me_normal'}}
                                                         style={styles.iconStyle}
                                  />}
                                  renderselectedicon={()=><Image source={{uri:'tabbar_icon_me_highlight'}}
                                                                 style={styles.iconStyle}
                                  />}
                                  onPress={()=>{
                                      this.setState({
                                          selectIndex:4
                                      })
                                  }}
                                  selected={this.state.selectIndex == 4}
                >
                    <View style={{flex:1, backgroundColor:'cyan'}}/>
                </TabNavigatorItem>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width:20,
        height:20
    }

})