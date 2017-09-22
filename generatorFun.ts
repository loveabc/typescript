function* generatorFun(name){
  console.log(`start from name ${name}`);
  yield "start";
  console.log(`end as ${name}`);
}

var fun1=generatorFun("zhang");

var s=fun1.next().value;
console.log(`${s}`);
fun1.next();