// Type Declaration
console.log("Hello World");
var a: string = "Abhinav"
console.log(a);
let age: number = 42
if (age < 50) age += 25;
console.log(`Age is ${age}`);
var b: any = 25
console.log(`Previous b = ${b}`);
b = "Hello"
console.log(`Latest b = ${b}`);
let sales = 123_456_789

function render(document: string) {
    console.log(document);
}

// Arrays
let numbers: number[] = [1, 3, 5, 7, 9]
console.log(`Number array is ${numbers}`);

// IntelliSense Use
numbers.forEach(n => n.toPrecision())
// console.log(numbers);

// Tuples
let users: [number, string] = [1, 'Abhinav']
console.log(`Original users Tuple was : ${users} `);
// Explicit conversion of Tuple into an array cna be done via .push() method
users.push(3)
console.log(`Users Tuple is Modified to this Array : ${users}`);

// enums
const enum Size {
    small,
    medium,
    large
}
console.log(`Large Size is : ${Size.large}`);
let mySize: Size = Size.medium
console.log(`My Size is : ${mySize}`);


// Functions
function add(a: number, b: number): number {
    return a + b
}
console.log(add(2, 3));
const subtract = function (x: number, y: number): void {
    console.log(x - y);
}
subtract(5, 3)
type AddFuncType = typeof add | ((numA: number, numB: number) => void); // Union type
let addFuncType: AddFuncType = add
console.log(addFuncType)
addFuncType(2, 3)
addFuncType = subtract
addFuncType(5, 3)

// Objects
let obj: { name: string, age: number } = {
    name: "Abhinav",
    age: 25
}
console.log(obj);

// Interfaces
interface Person {
    name: string,
    age: number
}
let person: Person = {
    name: "Abhinav",
    age: 25
}
console.log(person);

// Classes
class PersonClass {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
let personClass = new PersonClass("Abhinav", 25)
console.log(personClass);

// Access Modifiers
class PersonClassAccess {
    constructor(public name: string, private age: number) {
    }
}
let personClassAccess = new PersonClassAccess("Abhinav", 25)
console.log(personClassAccess.name);
// console.log(personClassAccess.age); // Error

// Inheritance
class Employee extends PersonClassAccess {
    constructor(name: string, age: number, public salary: number) {
        super(name, age)
    }
}
let employee = new Employee("Abhinav", 25, 100000)
console.log(employee);

// Generics
function echo<T>(arg: T): T {
    return arg
}
console.log(echo("Abhinav"));
console.log(echo(25));
console.log(echo({ name: "Abhinav", age: 25 }));
