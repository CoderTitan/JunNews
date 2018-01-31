/**
 * @providesModule JunArrowRowItem
 */
// 继承: JS没有继承 , ES6才有
// 假继承

import JunRowItem from 'JunRowItem'
function JunArrowRowItem(image, title, subTitle) {
    JunRowItem.call(this, image, title, subTitle)
}

// 在JS中,每个文件相当于一个模块
module.exports = JunArrowRowItem

// call方法: 1.交换方法实现 2.交换方法调用者
// 本质:让某个对象去执行某个方法