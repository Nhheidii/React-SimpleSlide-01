const user = {
  //属性
  id: 123,
  "full name": "Pooh",
  age: 105,

  //Method
  greeting() {
    console.log("Hi there");
    console.log(this.id);
    return 1;
  },
};

console.log(user.greeting);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  method() {
    console.log("Hi there");
  }
}
