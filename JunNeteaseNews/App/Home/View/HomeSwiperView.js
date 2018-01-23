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
                dot={<View style={{backgroundColor: 'green', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                paginationStyle={{
                    bottom: 0, left: null, right: 0
                }} loop>
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
        var adsDatas = ['contentview_imagebg_logo', 'contentview_imagebg_logo']
        var adsViews = []

        adsDatas.forEach((ad, i) => {
            console.log(ad)

            adsViews.push(
                <View style={{width:kScreenWidth, height:240}}
                      key={i}
                >
                    {/*imgsrc*/}
                    <Image source={{uri:ad}} resizeMode='stretch' style={styles.imageStyle}/>
                    {/*<Text style={styles.titleStyle}>{ad.title}</Text>*/}
                </View>
            )
        })

        return adsViews
    }
}

var styles = StyleSheet.create({
    imageStyle:{
        width:kScreenWidth,
        height:240
    },
    titleStyle:{
        position:'absolute',
        bottom:0,
        color:'red'
    },
    dotStyle:{
        backgroundColor: 'green',
        width: 5,
        height: 5,
        borderRadius: 4,
        margin:3
    },
    activityStyle:{
        backgroundColor: 'yellow',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin:3
    }
})