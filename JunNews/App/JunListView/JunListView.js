/**
 * @providesModule JunListView
 *
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView

}from 'react-native'
import PropTypes from 'prop-types'
import JunRowCell from "JunRowCell";
import AppConstant from "AppConstant";


export default class JunListView extends Component {

    static propTypes = {
        sectionItems: PropTypes.array,
        listViewStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        imageStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        titleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        subTitleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        navigator: PropTypes.object,

        renderHeader: PropTypes.func,
        renderFooter: PropTypes.func
    }

    constructor(props){
        super(props)

        //初始化数据源
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {r1 !== r2},
            sectionHeaderHasChanged: (s1, s2) => {s1 !== s2}
        })

        //处理组模型数据
        var sections = this.props.sectionItems

        var sectionDatas = []

        sections.forEach((sectionitem, i) => {
            sectionDatas.push(sectionitem.rowData)
        })

        //更新数据
        ds = ds.cloneWithRowsAndSections(sectionDatas)

        this.state = {
            dataArr: ds
        }
    }

    render(){
        return (
            <ListView style={[this.props.listViewStyle, {backgroundColor:AppConstant.bgColor}]}
                      dataSource={this.state.dataArr}
                      renderRow={this._renderRow.bind(this)}
                      renderSectionHeader={this._renderSectionHeader.bind(this)}
                      renderHeader={this.props.renderHeader}
                      renderFooter={this.props.renderFooter}
            />
        )
    }

    //创建cell
    _renderRow(rowData, sectionID, rowID){
        return (
            rowData.customData ? <rowData.customCellType rowData={rowData} {...this.props}/> : <JunRowCell rowData={rowData} {...this.props}/>
        )
    }

    //创建section的header
    _renderSectionHeader(sectionData, sectionID){
        //获取组模型
        var sectionItem = this.props.sectionItems[sectionID]

        return (
            <View style={{height: sectionItem.sectionHeight}}/>
        )
    }
}