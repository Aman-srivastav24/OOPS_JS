const user= {
  name:"Rahul",
  age:23,
  isloggedin:false,
  greet:function greet(){
    console.log(`This is ${this.name} , Good Morning`)
  }
}
console.log(user.name);
user.greet();