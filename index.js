// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
function isArray(obj) {
    return typeof obj == 'object' && obj.constructor == Array
}
console.log(isArray(a));
console.log(isArray(b));


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for ( var i = 0; i <a.length; i++){
    a[i] *=2;
}


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
for ( var i = 0; i <colors.length - 1; i++){
    var case1 = colors[i] + " "
    var case2 = colors[i] + "+"
    var case3 = colors[i] + ","
}
console.log(case1 += colors[colors.length])
console.log(case2 += colors[colors.length])
console.log(case3 += colors[colors.length])


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
//a.reverse();
function getMaxSort(a) {
  var max;
  for (var i = 0; i < a.length; i++) {
    for (var j = i; j < a.length; j++) {
      if (a[i].coupon.faceMoney < a[j].coupon.faceMoney) {
        max = a[j];
        a[j] = a[i];
        a[i] = max;
      }
    }
  }
  return a;
}
console.log(getMaxSort(a))

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(a){
  var b = {};
  var max = null;
  var maxNum = 0;
  for(var i = 0; i < a.length; i++){
    var a = a[i];
    b[a] === undefined ? b[a] = 1 : (b[a]++);
    if(b[a] > maxNum){
      max = a;
      maxNum = b[a];
    }
  }
  console.log(maxNum,max);
}
