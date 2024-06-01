const user= {
  name:"Rahul",
  age:23,
  isloggedin:false,
  greet:function greet(){
    console.log(`This is ${this.name} , Good Morning`)
  }
}
console.log(user.constructor);
user.greet();

// objects literals are the way to create objects .
//It's a commas separated list with key value pairs

