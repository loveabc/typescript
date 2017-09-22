var arr=[1,2,3,4,5];

arr.forEach(value=>console.log(value));

for(var value in arr){
  console.log(value+"  "+arr[value]);
}

//for of 可以遍历数组、字符串、map等
for(var value of arr){
  console.log(value);
}

for(var value of "zhangwenquan"){
  console.log(value);
}