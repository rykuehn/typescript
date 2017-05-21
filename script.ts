// function Greeter(greeting: string){
//   this.greeting = greeting;
// }

// Greeter.prototype.greet = function(){
//   return 'Hello ' + this.greeting;
// }

// let greeter = new Greeter('world');

// let button = document.createElement('button');
// button.textContent = 'Say Hello';
// button.onclick = function(){
//   alert(greeter.greet());
// }

// document.body.appendChild(button);

//string
let myName: string = 'Robin';
//number
let age: number = 28;

//boolean
let hobbies: boolean = true;

//assign types - type 'any' is default
let myRealAge: number;

//array
//TS infers its an array of strings
let family = ['amy', 'gerhard', 'cliff'];

let familyPlus: any[] //increases flexibility. Array of any datatype

//tuples
let address: [string, number] = ['superstreet', 99];

//enum -> Make numbers more expressive
enum Color {
  Gray, //0
  Green = 100, //1(original) //100(continues incrementing from this number)
  Blue //2
}
let myColor: Color = Color.Green;

//any
let car: any = 'BMW';

//function -> the type returns to the return value
function returnMyName():string {
  return myName;
}

//console.log(returnMyName());

//void -> nothing to be returned
function sayHello(): void{
  console.log('hello')
}

//argument types
function multiply(x: number, y:number): number{
  return x * y;
}

//function types
let myMultiply: (val1: number, val2: number) => number; 

//objects
let userData: {name: string, age: number} = {
  name: 'Robin',
  age: 25
}

//complex object
let complex1: { data: number[], output: (all: boolean) => number[] } = {
    data:[100, 3.99, 4],
    output: function(all: boolean): number[]{
    return this.data;
    }
}

//type alias
type complexITY = { data: number[], output: (all: boolean) => number[]};

//-----> using custom type of complexITY

let complex: complexITY = {
    data: [ 100, 3.99, 4],
    output: function (all: boolean): number[]{
    return this.data;
    }
}


//union types
let myRealRealAge: number | string = 27;
//will never be a boolean, can only  be number or string;
myRealRealAge = "27"

//check types
 var finalValue = 2;
 //console.log(typeof finalValue)

 //never
 function neverReturns(): never {
   throw new Error('this is an error');
 }

 //nullable types --- chanfe in ts.json. add a flag that changes nullable check

//SUMMARY EXERCISE
type BankAccount = {money: number, deposit: (value: number) => void}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
 
type person = {name: string, bankAccount: BankAccount , hobbies: string[], }
let myself: person = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);

class Person {
  name: string;
  private type: string;
  protected age: number = 25;

  constructor(name: string, public username: string){
    this.name = name;
  }

  printAge(){
    console.log(this.age);
    this.setType('old guy');
  }

  private setType(type: string){
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Robin', 'rykuehn');

//console.log('person', person)

//INHERITANCE

class Robin extends Person {
  name = 'John'

  constructor(username){
    //super refers to parent class
    super("max",username);
  }
}

const John = new Robin('Anna');
console.log(John)