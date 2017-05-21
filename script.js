// function Greeter(greeting: string){
//   this.greeting = greeting;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//function -> the type returns to the return value
function returnMyName() {
    return myName;
}
//console.log(returnMyName());
//void -> nothing to be returned
function sayHello() {
    console.log('hello');
}
//argument types
function multiply(x, y) {
    return x * y;
}
//function types
var myMultiply;
//objects
var userData = {
    name: 'Robin',
    age: 25
};
//complex object
var complex1 = {
    data: [100, 3.99, 4],
    output: function (all) {
        return this.data;
    }
};
//-----> using custom type of complexITY
var complex = {
    data: [100, 3.99, 4],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 27;
//will never be a boolean, can only  be number or string;
myRealRealAge = "27";
//check types
var finalValue = 2;
//console.log(typeof finalValue)
//never
function neverReturns() {
    throw new Error('this is an error');
}
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 25;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('old guy');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Robin', 'rykuehn');
//console.log('person', person)
//INHERITANCE
var Robin = (function (_super) {
    __extends(Robin, _super);
    function Robin(username) {
        var _this = 
        //super refers to parent class
        _super.call(this, "max", username) || this;
        _this.name = 'John';
        return _this;
    }
    return Robin;
}(Person));
var John = new Robin('Anna');
console.log(John);
