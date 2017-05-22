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
//GETTERS AND SETTERS
var Plant = (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
//  STATIC PROPERTIES AND METHODS
//add static keyword to access property without having to instantiate a new instance of the class
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return diameter * this.PI;
    };
    return Helpers;
}());
Helpers.PI = 3.14;
//console.log(Helpers.calcCircumference(4) * 2);
//ABSTRACT CLASSES: CAN NOT BE INSANTIATED. HAS TO BE EXTENDED
//general functionality in base class. 
var Project = (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
newProject.changeName('Robin Wins');
console.log(newProject);
//PRIVATE constructor ---> force the class to be a singleton
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('This is the only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('The Only one');
var right = OnlyOne.getInstance();
//READ ONLY PROPERTIES
//add read only to the public in the constructor(see above)
// Exercise 1 - How was your TypeScript Class?
var Car = (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car1 = new Car("BMW");
car1.honk();
console.log('!!!!!!!!', car1.acceleration);
car1.accelerate(10);
console.log('222222', car1.acceleration);
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName); 
