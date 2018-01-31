/*
 * @providesModule HomeView
 *
 * */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    RefreshControl
} from 'react-native';
import JunNetRequest from 'JunNetRequest'
import HomeNewsCell from 'HomeNewsCell'
import HomeSwiperView from 'HomeSwiperView'
import JunNavigation from "JunNavigation";

export default class HomeView extends Component {
    constructor(props){
        super(props);

        //创建数据源
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {r1 != r2},
        })

        //设置初始数据源
        this.state = {
            isRefreshing:false,
            adsArr:[],
            dataArr:ds.cloneWithRows([])
        }
    }

    //组件加载完成
    componentDidMount() {
        //加载数据
        this._getNewData()

    }

    render(){
        return (
            <View>
                <ListView dataSource={this.state.dataArr}
                          refreshControl={this._refreshControl()}
                          enableEmptySections={true}
                          removeClippedSubviews={false}
                          renderRow={this._renderRow.bind(this)}
                          renderHeader={this._renderHeader.bind(this)}
                          // onEndReached={}
                />
            </View>

        )
    }

    //刷新控件
    _refreshControl(){
        return (
            <RefreshControl refreshing={this.state.isRefreshing}
                            onRefresh={this._getNewData.bind(this)}
                            tintColor='red'
                            title='正在加载中...'
            />
        )
    }

    //渲染cell
    _renderRow(rowData, sectionID, rowID){
        return (
            <HomeNewsCell rowData={rowData} navigator={this.props.navigator}/>
        )
    }

    //渲染头部
    _renderHeader(){
        return (
            <HomeSwiperView adsArray={this.state.adsArr} navigator={this.props.navigator}/>
        )
    }

    /// 请求数据
    _getNewData(){
        this.setState({isRefreshing:true})
        var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?size=20'
        JunNetRequest.Get(url, null, (json) => {
            //请求成功
            //解析数据
            var ads = []
            var datas = []

            //所有数据集合
            var jsonArr = json['T1348647853363']

            jsonArr.forEach((data, i)=>{
                if (i == 0) {//轮播图
                    ads = data.ads
                }else{
                    datas.push(data)
                }
            })

            //刷新数据
            this.setState({
                isRefreshing:false,
                adsArr:ads,
                dataArr:this.state.dataArr.cloneWithRows(datas)
            })
        }, (error) => {
            console.log(error)
            alert("网络错误, 请重新加载")
            this.setState({
                isRefreshing:false,
                adsArr:[],
                dataArr:this.state.dataArr.cloneWithRows([])
            })
        })

    }
}

var styles = StyleSheet.create({
    cellStyle:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#f7f7f7'
    },
    topViewStyle:{
        marginHorizontal:10,
        marginTop:5,
        height: 40,
        flexDirection:'row',
        alignItems:'center'
    }
})

