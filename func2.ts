function getStock(){
  return {
    code:"QQ",
    price:180
  };
}


var stock=getStock();
console.log(`${stock.code}`);
console.log(`${stock.price}`);

//析构表达式
var {code,price}=getStock();
console.log(code);
console.log(price);

//析构表达式 里面的参数名称必须与函数中声明的一致,可以通过:进行重命名
var {code:codex,price}=getStock();
console.log(codex);
console.log(price);

function getStock2(){
  return {
    code:"IBM",
    price:{
      maxPrice:200,
      minPrice:160
    }
  };
}

var {code,price:{minPrice,maxPrice}}=getStock2();
console.log(code);
console.log(maxPrice);
console.log(minPrice);

//上面是从对象里面解析属性,下面是从数组中解析属性
var arr=[1,2,3,4,5];
var [num1,num2,num3]=arr;

console.log(num1);
console.log(num2);
console.log(num3);

//用于交换
var [num2,num3,num1]=[num1,num2,num3];
console.log(num1);
console.log(num2);
console.log(num3);

var [num1,,,num2,num3]=arr;
console.log(num1);
console.log(num2);
console.log(num3);


var [num1,num2,...args]=arr;
console.log(num1);
console.log(num2);
console.log(args);

function doSomething([num1,num2,...args]){
  console.log(num1);
  console.log(num2);
  console.log(args);
}

doSomething(arr);