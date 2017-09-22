function fun1(s1,s2,s3){
  console.log(`${s1}`);
  console.log(`${s2}`);
  console.log(`${s3}`);
}
//带默认值的函数
function fun2(s1,s2,s3="quan"){
  console.log(`${s1}`);
  console.log(`${s2}`);
  console.log(`${s3}`);
}
//带可变参数的函数
function fun3(...args){
  args.forEach(function(arg){
    console.log(`${arg}`);
  });
}

fun1("zhang","wen","quan");
fun2("zhang","wen","mq");
fun3(1,2,3,5,6);