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