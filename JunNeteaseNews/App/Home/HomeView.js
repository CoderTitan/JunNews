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
    ListView
} from 'react-native';
import JunNetRequest from 'JunNetRequest'
import HomeNewsCell from 'HomeNewsCell'
import HomeSwiperView from 'HomeSwiperView'

export default class HomeView extends Component {
    constructor(props){
        super(props);

        //创建数据源
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {r1 != r2},
        })

        //设置初始数据源
        this.state = {
            adsArr:[],
            dataArr:ds.cloneWithRows([])
        }
    }

    //组件加载完成
    componentDidMount() {
        var dataNews = []
        //加载数据
        var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?size=20'
        fetch(url)
            .then((response)=>response.json())
            .then((json)=>{
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
                    adsArr:ads,
                    dataArr:this.state.dataArr.cloneWithRows(datas)
                })
            })
            .catch((error)=>{
                console.log(error)
                alert("网络错误, 请重新加载")
            })


        //刷新界面

    }

    render(){
        return (
            <View>
                <ListView dataSource={this.state.dataArr}
                          enableEmptySections={true}
                          removeClippedSubviews={false}
                          renderRow={this._renderRow.bind(this)}
                          renderHeader={this._renderHeader.bind(this)}
                />
            </View>

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
        <View style={{width:414, height: 250, backgroundColor:'red'}}/>

        {/*<HomeSwiperView adsArray={this.state.adsArr}/>*/}
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

