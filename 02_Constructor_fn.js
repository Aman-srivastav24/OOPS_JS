function User (username,age,loggedin) {
  this.username = username,
  this.age=age,
  this.loggedin=loggedin
  return this
}

const userone = new User("Aman",23,true);
const usertwo = new User("Rahul",24,false);
console.log(userone.constructor)
