//箭头表达式

var sum=(a,b)=>a+b;
var sum=(a,b,c)=>{
  return a+b+c;
}

function test(a){
  return a%2==0;
}

var arr=[1,2,3,4,5,6];

console.log(arr.filter(test));

console.log(arr.filter(value=>value%2==0));

var my=()=>5;