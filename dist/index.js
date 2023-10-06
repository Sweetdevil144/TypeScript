"use strict";
console.log("Hello World");
var a = "Abhinav";
console.log(a);
let age = 42;
if (age < 50)
    age += 25;
console.log(`Age is ${age}`);
var b = 25;
console.log(`Previous b = ${b}`);
b = "Hello";
console.log(`Latest b = ${b}`);
let sales = 123456789;
function render(document) {
    console.log(document);
}
let numbers = [1, 3, 5, 7, 9];
console.log(`Number array is ${numbers}`);
numbers.forEach(n => n.toPrecision());
let users = [1, 'Abhinav'];
console.log(`Original users Tuple was : ${users} `);
users.push(3);
console.log(`Users Tuple is Modified to this Array : ${users}`);
console.log(`Large Size is : ${2}`);
let mySize = 1;
console.log(`My Size is : ${mySize}`);
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
const subtract = function (x, y) {
    console.log(x - y);
};
subtract(5, 3);
let addFuncType = add;
console.log(addFuncType);
addFuncType(2, 3);
addFuncType = subtract;
addFuncType(5, 3);
let obj = {
    name: "Abhinav",
    age: 25
};
console.log(obj);
let person = {
    name: "Abhinav",
    age: 25
};
console.log(person);
class PersonClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let personClass = new PersonClass("Abhinav", 25);
console.log(personClass);
class PersonClassAccess {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let personClassAccess = new PersonClassAccess("Abhinav", 25);
console.log(personClassAccess.name);
class Employee extends PersonClassAccess {
    salary;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}
let employee = new Employee("Abhinav", 25, 100000);
console.log(employee);
function echo(arg) {
    return arg;
}
console.log(echo("Abhinav"));
console.log(echo(25));
console.log(echo({ name: "Abhinav", age: 25 }));
//# sourceMappingURL=index.js.map