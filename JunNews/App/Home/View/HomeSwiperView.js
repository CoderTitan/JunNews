/*
 * @providesModule HomeSwiperView
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
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types'
import DetailView from 'DetailView'

//全屏的宽
var kScreenWidth = Dimensions.get('window').width

export default class HomeSwiperView extends Component {
    static propTypes = {
        adsArray: PropTypes.array
    }

    render(){
        return (
            <Swiper height={240}
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={styles.dotStyle} />}
                    activeDot={<View style={styles.activityStyle} />}
                    paginationStyle={styles.paginationStyle}
                    autoplay={true}
                    loop
            >
                {this._renderADSViews()}
            </Swiper>
        )
    }
/*
*
* */
    //创建每一组图片
    _renderADSViews(){
        var adsDatas = this.props.adsArray
        var adsViews = []

        adsDatas.forEach((ad, i) => {
            adsViews.push(
                <TouchableOpacity style={{width:kScreenWidth, height:240}}
                                  onPress={this._swiperSelectorAction.bind(this)}
                                  key={i}
                >
                    {/*imgsrc*/}
                    <Image source={{uri:ad.imgsrc}} resizeMode='stretch' style={styles.imageStyle}/>
                    <View style={styles.titleStyle}>
                        <Text style={{lineHeight:30, marginLeft:5, color:'white'}}>{ad.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        })

        return adsViews
    }

    //点击跳转
    _swiperSelectorAction(){
        this.props.navigator.push({
            component:DetailView,
            title:'新闻详情页',
            passProps:{
                newsID:this.props.rowData.docid
            }
        })
    }
}

var styles = StyleSheet.create({
    imageStyle:{
        width:kScreenWidth,
        height:240
    },
    titleStyle:{
        backgroundColor:'black',
        opacity:0.7,
        width:kScreenWidth,
        height:30,
        position:'absolute',
        bottom:0
    },
    dotStyle:{
        backgroundColor: '#efefef',
        width: 5,
        height: 5,
        borderRadius: 4,
        margin:3
    },
    activityStyle:{
        backgroundColor: 'red',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin:3
    },
    paginationStyle:{
        bottom: 7,
        left: null,
        right: 0
    }
})