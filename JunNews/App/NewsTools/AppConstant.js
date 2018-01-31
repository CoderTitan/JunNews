/**
 * @providesModule AppConstant
 *
 */

import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,

}from 'react-native'
// 自定义类
export default class AppConstant {
    static kScreenW = Dimensions.get('window').width;
    static kScreenH = Dimensions.get('window').height;
    static bgColor = 'rgb(247, 247, 247)'

}