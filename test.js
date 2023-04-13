// var fs = require("fs");

// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("程序执行结束!");
// console.log("rgnie?");

var obj = [1, 5, 2, 5, 2, 6, 3, 2, 4, 7, 7, 9, 1, 3, 53];

//冒泡排序
var sort1 = function (array) {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
      }
    }
  }
  return array;
};
//选择排序
var sort2 = function (array) {
  for (i = 0; i < array.length; i++) {
    let min = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};

//插入排序
var sort3 = (array) => {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j != 0; j--) {
      if (array[j - 1] > array[j]) {
        let k = array[j - 1];
        array[j - 1] = array[j];
        array[j] = k;
      }
    }
  }
  return array;
};
// function sort3(array) {
//   var n = array.length;
//   for (var i = 1; i < n; i++) {
//     var key = array[i];
//     var j = i - 1;
//     while (j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       j = j - 1;
//     }
//     array[j + 1] = key;
//   }
//   return array;
// };

//希尔排序
var sort4 = (array) => {
  for (
    let gap = Math.floor(array.length / 2);
    gap >= 1;
    gap = Math.floor(gap / 2)
  ) {
    console.log(gap);
    for (let i = 0; i + gap < array.length; i++) {
      if (array[i] > array[i + gap]) {
        let k = array[i + gap];
        array[i + gap] = array[i];
        array[i] = k;
        // console.log(array[i]);
      }
    }
  }
  return array;
};

console.log("冒泡排序", sort1(obj));
console.log("选择排序", sort2(obj));
console.log("插入排序", sort3(obj));
console.log("希尔排序", sort4(obj));

//手写bind
// Function.prototype.binBind = function (context, ...args) {
//   if (typeof this !== "function") return console.error("error");
//   context =
//     context !== null && context !== undefined ? Object(context) : window;
//   context.fn = this;

//   return function Fn(...args2) {
//     const newArr = [...args, ...args2];
//     const result = context.fn(...newArr);
//     delete context.fn;
//     return result;
//   };
// };
