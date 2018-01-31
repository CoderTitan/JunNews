/**
 * @providesModule JunSectionItem
 *
 * 自定义类,如果这个类需要初始化属性,一般不使用class方式,这种定义不支持初始化传值
 * ES5自定义类
 */

//ES5自定义类
function JunSectionItem(rowData, sectionHeight) {
    this.rowData = rowData
    this.sectionHeight = sectionHeight
}

// 导出模块, 在JS中,每个文件相当于一个模块
module.exports = JunSectionItem