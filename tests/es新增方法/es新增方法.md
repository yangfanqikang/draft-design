#Array

##1.map()

[1,2,3,4].map(function(item, index, array){

　　return  item * 2;

})

对数组中的每一项执行一次回调函数，三个参数依次为：数组中的每一项、每一项的下标、原数组。

map方法会改变原数组。

##2.filter()

[1,22,3,14].filter(function(item, index, array){

　　return  item >= 10;

})

对数组中的每一项执行一次回调函数，三个参数依次为：数组中的每一项、每一项的下标、原数组。

filter方法会新建一个数组存储满足条件的项，不会改变原数组

##3.some()

var  result = [11, 13, 15, 17].some(function(item, index, array) {

　　return  (item >= 20)  //判断数组中是否有大于等于20的项，只要有一个满足条件即返回true

})

##4.every()

var  result = [11, 13, 15, 17].some(function(item, index, array) {

　　return  (item >= 20)  //判断数组中的每一项是否大于等于20，只要有一个不满足条件即返回false

})

##5.lastIndexOf()

var  index = [2,3,4,2].lastIndexOf('2');  //index = 3

返回给定项在数组中最后一次出现的位置

##6.reduce()

var  sum = [1,2,3,4].reduce(function(result, current, index, array) {

　　return   result + current;   //10　

})

对数组元素按照给定的规则累积运算,result为每次得到的结果，current为当前值

##7.of()

　　Array.of(1,2,3)   //输出[1,2,3]

##8.from()  将类数组转化为数组

　　常用去重 Array.from(new Set([1,2,2,1,4,3,5,3]))  //输出[1,2,3,4,5]

##9.fill()

　　[0,0,0].fill(11, 1)    //输出[0,11,11]

　　第一个参数为填充的字符，第二个参数为起始填充下标

##10.find()  用于找出第一个符合条件的数组成员,没有符合条件的成员则返回undefined

　　["a","2","b"].find((item)=> item == "2")

　　接收一个回调函数，数组的每一项都会执行该回调，参数依次为当前项、当前项下标、原数组

#Object

##1.assign()

　　var  obj1 = {"name": "yzf"}

　　var  obj2 = {"age": "26"}

　　var obj = Object.assign(obj1,obj2)   //输出{"name": "yzf","age": "26"}

上述为开发中常用到的api，es6其它开发中经常用到的新特性（箭头函数、解构复制、字符串模板、类、模块、Promise）自行了解。

#String
##1. startsWith（）
　　作用： 检测字符串以什么开头
　　实例： 
let  str = "www.qjzzj.top";
console.log(str.startsWith('www'));  // true
##2. endsWith（）
　　作用： 检测字符串以什么结尾
　　实例：
let  str = "www.qjzzj.top";
console.log(str.endsWith('www'));   // false
console.log(str.endsWith('top'));   // true
##3. includes()
　　作用： 检测字字符串中是否包含某个字符
　　实例： 
let  str = "www.qjzzj.top/";
console.log(str.includes('www'));  // true
console.log(str.includes('qjzzj'));   // true
##4. repeat(n)
　　作用： 重复 n 次
　　实例
let str = "写代码";
console.log(str.repeat(3));    //  写代码写代码写代码
##5. padStart(length,txt)
　　作用： 头部补全字符串
　　　　　第一个参数 是字符串的的最小长度  长度小于字符串实际长度是，不会再补充字符
　　　　　第二个参数是以什么补全
　　实例
let str = "2018-12";
console.log(str.padStart(10,"*"));   // ***2018-12
　　

##6. padEnd(length,txt)
　　作用： 尾部补全字符串
　　实例
let str = "2018-12";
console.log(str.padStart(10,"*")); // ***2018-12