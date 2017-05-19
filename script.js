"use strict";
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
var myName = 'Robin';
//number
var age = 28;
//boolean
var hobbies = true;
//assign types - type 'any' is default
var myRealAge;
//array
//TS infers its an array of strings
var family = ['amy', 'gerhard', 'cliff'];
var familyPlus; //increases flexibility. Array of any datatype
//tuples
var address = ['superstreet', 99];
//enum -> Make numbers more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
//any
var car = 'BMW';
//function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
