class Person {
  constructor(age, name) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person(25, "John");

function describePerson(callback) {
  callback(person1)
}

function wait(miliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, miliseconds, `The promise resolved after ${miliseconds} miliseconds`)
  })
}

wait(2000).then(message => {
  console.log(message)
})

console.log(person1.introduce());
describePerson(function () {
  console.log(person1.introduce);
})