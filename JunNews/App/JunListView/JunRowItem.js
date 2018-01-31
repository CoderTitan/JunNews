/**
 * @providesModule JunRowItem
 *
 * 自定义类,如果这个类需要初始化属性,一般不使用class方式,这种定义不支持初始化传值
 * ES5自定义类
 */

//ES5自定义类
function JunRowItem(image, title, subTitle) {
    this.image = image
    this.title = title
    this.subTitle = subTitle
    this.clickCell = null
    this.route = null

    //自定义cell
    this.customData = null
    this.customCellType = null
}

// 导出模块, 在JS中,每个文件相当于一个模块
module.exports = JunRowItem