class Person{
  name:string
  sex:string
  
  run(){
    console.log(`${this.name} run quickly`);
  }
}

var child=new Person();
child.name="tom";
child.run();

var adult=new Person();
adult.name="jerry";
adult.run();