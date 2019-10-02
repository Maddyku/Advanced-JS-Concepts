//JavaScript Engine
function jsengine(code) {
    return code.split(/\s+/)
}

jsengine('var a = 5')

//interpreter vs compiler
function someCalculation(x, y) {
    return x + y;
}

for (let i = 0; i < 1000; i++) {
    someCalculation(5,4);
    console.log(i)
}

//inline caching
function findUser(user) {return
     `found ${user.firstName} ${user.lastName}`
}

const userData = {
	firstName: 'Johnson',
	lastName: 'Junior'
}

findUser(userData)

//Hidden classes
function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
obj2.a = 30;
obj2.b = 100;

//Call stack + Memory Heap
const number = 610; //allocate memory for number 
const string = 'some text' //allocate memory for string
const human = { //allocate memory for an object and its values
    first: 'Andrei',
    last: 'Neagoie'
}

function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();

//Stack Overflow
function inception() {
    inception()
}   //Recursion - a function calling itself


//Memory Leaks in JS
let array = [];
for (let i = 5; i > 1; i++) {
    array.push(i-1)
}

    //Global Variable 
    var a = 1;
    var b = 1;
    var c = 1;

    //Event Listeners
    var element = document.getElementById('button');
    element.addEventListener('click', onClick)

    //setInterval
    setInterval(() => {
        //referencing objects
    })

//Asynchronous JS
console.log('1');
setTimeout(() => {console.log('2'), 1000});
console.log('3');

//Execution Context
function printName() {
    return 'Andrei Neagoie'
  }
  
  function findName() {
    return printName()
  }
  
  function sayMyName() {
    return findName()
  }
  
  sayMyName()


//Global Execution Context

    /* Global Object In Google Chrome Browser or 
    JS Engine is 'window object' or 'this' keyword */  
        window;
        this; 

    // Global Object in Node JS Runtime Env is global
        global;

//Hoisting
console.log('1------')
console.log(teddy)
console.log(sing())
var teddy = 'bear';
function sing() {
  console.log('ohhhh la la la')
}

    /* Console Output:
    VM8970:1 1------
    VM8970:2 undefined
    VM8970:6 ohhhh la la la
    VM8970:3 undefined
    undefined */

//Function Experession
var canada = function() {
    console.log('cold')
  }
  
//Function Declaration
function india() {
    console.log('warm')
  }


//Function Invocation (with Arguments)
function marry(person1, person2) {
    console.log('arguments', arguments)
    console.log(Array.from(arguments))  //Array methods
    return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina')

    /* Console Output:
    arguments { 0: 'Tim', 1: 'Tina' }
    [ 'Tim', 'Tina' ]
    => 'Tim is now married to Tina' */


//Function Invocation (with Rest Parameters)
function marry(...args) {
    console.log('arguments', args)
    console.log(Array.from(arguments))  //Array methods
    return `${args[0]} is now married to ${args[1]}`
}

marry('Tim', 'Tina')

    /* Console Output:
    arguments [ 'Tim', 'Tina' ]
    [ 'Tim', 'Tina' ]
    => 'Tim is now married to Tina' */

//Variable Environment
function two() {
    var isValid;
  }
  
  function one() {
    var isValid = true;
    two();
  }
  
  var isValid = false;
  one();

/*      Call Stack -- Variable Env of var isValid
        two() -- undefined
        one() -- true
        global() -- false   */


//Scope Chain
function findName() {
    var b = 'b';
    return printName();
  }
  
  function printName() {
    var c = 'c'
    return 'Andrei Neagoie'
  }
  
  function sayMyName() {
    var a = 'a';
    return findName()
  }
  
  sayMyName()

//Example of Nested Scope Chain
  function sayMyName() {
    var a = 'a';
    return function findName() {
      var b = 'b';
      return function printName() {
        var c = 'c';
        return 'Andrei Neagoie'
      }
    }
  }
  
  sayMyName()()()

    /* Console Output:
    => 'Andrei Neagoie' */

//IIFE (Immediately Invoked Function Expression)

(function() {
})();


//"this" Keyword
    //Example 1 (this == global object == window object)
    function a() {
        console.log(this)
    }

    a()
    //OR
    window.a()
        
    //  Console Output:
        Window {…} 


    //Example 2 ('use strict')
    function b() {
        'use strict'
        console.log(this)
    }

    b()

    // Console Output:
    undefined   

    //Example 3
    const obj = {
        name: 'Billy',
        sing() {
            return 'lalala' + this.name
    },  singAgain() {
            return this.sing() + '!'
        }
    }

    obj.singAgain()

    //Console Output:
    'lalala Billy!'


/*   call() - Calls a method of an object, substituting
     another object for the current object.    */
const wizard = {
    name: 'Merlin',
    health: 50,
    heal() {
        return this.health = 100;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

    console.log('1', archer)
    wizard.heal.call(archer)
    console.log('2', archer)

    //Console Output:
    1 { name: 'Robin Hood', health: 30 }
    2 { name: 'Robin Hood', health: 100 }
    

/*  bind() - For a given function, creates a bound function
    that has the same body as the original function. */
const wizard = {
    name: 'Merlin',
    health: 50,
    heal() {
      return this.health = 100;
    }
  }
  
  const archer = {
    name: 'Robin Hood',
    health: 30
  }
  
    console.log('1', archer)
    const healArcher = wizard.heal.bind(archer)
    healArcher()
    console.log('2', archer)
    
    //Console Output:
    1 { name: 'Robin Hood', health: 30 }
    2 { name: 'Robin Hood', health: 100 }


//function currying

function multiply(a, b) {
    return a * b
  }
  
  let multiplyByTwo = multiply.bind(this, 2)
  console.log(multiplyByTwo(4))

  let multiplyByTen = multiply.bind(this, 10)
  console.log(multiplyByTen(4))

  //Console Output:
  2
  40  


//Types in JavaScript

    //Primitive Types - Immutable 
        //Numbers
        5
        
        //Strings
        'To be or not to be'

        //Boolean
        true, false

        //Undefined
        undefined
        /* undefined is absence of a type definition
        so its used as the default value when:
        1. JS Engine initializes our variables (Hoisting)
        2. Function doesn't return anything
        3. Missing properties in an object  */

        //Null
        null
        /* Null is absence of a vaule
        typeof null is object -> mistake BUT there is too
        much legacy code that fixing the mistake would break */

        //Symbol
        Symbol('just me')

    //Non-Primitive Types - Mutable 
        //Objects - Includes objects, arrays and functions
        {}
        []
        function(){}

    //Arrays are Objects
    var array = [1, 2, 3];

    var array = {
        0: 1,
        1: 2,
        2: 3
    }

//Pass By Value vs Pass By Reference
    /* Pass By Value -> Copying value from one variable in memory heap
     and placing the value in another variable in memory heap
     WITHOUT changing or mutating the value of the first variable */ 
    var a = 5;
    var b = a;

    b++;

    console.log(a)
    console.log(b)

        //Console Output: 
        5
        6

    /* Pass By Reference -> Referencing value from one variable in memory
     heap to another variable. CHANGES to one variable now AFFECT the other
     variable as they are linked to the same memory address */
    let obj1 = {name: 'Yao', password: '123'};
    let obj2 = obj1;

    obj2.password = 'easypeasy'

    console.log(obj1)
    console.log(obj2)

        //Console Output:
        { name: 'Yao', password: 'easypeasy' }
        { name: 'Yao', password: 'easypeasy' }


/* The 2 Pillars - Closures & Prototypal Inheritance */

//Functions are Objects

//Calling a function normally
function one() {
  return 1 
}

one()

//Calling a function as a method
const obj = {
  two: function() {
    return 2;
  }
}

obj.two();

//Calling a function with .call()
function three() {
  return 3;
}

three.call()

//Calling a function through a Function Constructor
const four = new Function('return 4')

four()

//Functions are first class citizens in JS

/* 1 - Functions can be assigned to 
variables and properties of objects */
var stuff = function(){}

/* 2 - Functions can be passed as arguments
or parameters into another function */
function a(fn) {
  fn()
}
a(function() {console.log('hi there')})

/* 3 - Functions can be returned as values
from other functions */
function b() {
  return function c() {console.log('bye')}
}

var d = b()
d
d() // = b()()


/* Higer Order Functions - Functions that can take a function
as an argument or functions that return other functions.
HOFs allow us to keep our code DRY (modular) and flexible */

const giveAccessTo = name =>
'Access Granted to ' + name

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i)
  }
  return true;
}

function letPerson(person, fn) {  //Higher Order Function
  if (person.level === 'admin') {
    fn(500000)
  } else if (person.level === 'user') { 
    fn(100000)
  }
  return giveAccessTo(person.name)
}

letPerson({level: 'user', name: 'Tim'},
authenticate)
    //'Access Granted to Tim'
letPerson({level: 'admin', name: 'Sally'},
authenticate)
    //'Access Granted to Sally'


//Prototypal Inheritance

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return `${this.name} did 70 damage`
  },
  sing() {
    if (this.fire) {
    return `I am ${this.name}, the breather of fire`
    }
  }
}

dragon.sing()
  // 'I am Tanya, the breather of fire'
dragon.fight()
  // 'Tanya did 70 damage'

let lizard = {
  name: 'Kiki',
  fight() {
    return `${this.name} did 5 damage`
  }
}

lizard.__proto__ = dragon;  
/* Lizard object instance inherits methods from dragon object instance
and properties that Lizard does not already have. Kiki already has this.name and .fight()
so it does not inherit those but it inherits fire: true,
and sing() method */
lizard.sing() //We borrow sing method from dragon but use Kiki's name
  // 'I am Kiki, the breather of fire'
lizard.fight()  //Kiki has fight method attached so we use that
  //Kiki did 5 damage


//Constructor Functions

  /* Convention to start constructor functions with 
  Capital Letter to let other programmers know */
function Elf(name, weapon) {
  /*Every function gets 'this' keyword and 
  arguments in the execution context */
    this.name = name;
    this.weapon = weapon;
}
  /* Regular functions are dynamically scoped so 
  'this' is going to change based on who calls it */
Elf.prototype.attack = function() {
    return `${this.name} attacks with ${this.weapon}`
}
  
  /* Create 'new' instances of Elf from constructor function.
  'new' keyword points 'this' to the object instance */
const peter = new Elf('Peter', 'stones')
const sam = new Elf('Sam', 'fire')

console.log(peter.attack())
  //Returns: 'Peter attacks with stones'
console.log(sam.attack())
  //Returns: 'Sam attacks with fire'


//ES6 Classes - Syntactic Sugar for Prototypal Inheritance
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.name} attacks with ${this.weapon}`
  }
}

/* Create 'new' instances of Elf from 
class constructor function */
const peter = new Elf('Peter', 'stones')
const sam = new Elf('Sam', 'fire')

/* Use class method .attack() for instances */
console.log(peter.attack())
  //Returns: 'Peter attacks with stones'
console.log(sam.attack())
  //Returns: 'Sam attacks with fire'


//Inheritance

//Character superclass constructor for all character types
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

/* Elf is a subclass of Character or has a protoype
chain which 'extends' up to Character */
class Elf extends Character {
  //Constructor for the Elf class
  constructor(name, weapon, type) {
    /* Must call super constructor in derived Elf class
    before accessing 'this' in Elf class */
    super(name, weapon);
    this.type = type
  }
}

/* Ogre is a subclass of Character or has a protoype 
chain which 'extends' up to Character */
class Ogre extends Character {
  //Constructor for the Ogre class
  constructor(name, weapon, color) {
    /* Must call super constructor in derived Ogre class
    before accessing 'this' in Ogre class */
    super(name, weapon);
    this.color = color;
  }
  makeFort() { 
    return `${this.name} made 
    the strongest fort in the world`
  }
}

//Instantiate Peter Object from Elf Class Constructor
const peter = new Elf('Peter', 'stones', 'infernal')
peter.attack()  //Method from character class
  //Returns 'Peter attacks with stones'

const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()  //Method from Ogre class
  //Returns 'Shrek made the strongest fort in the world'


/* Functional Programming */

//Function with Side Effects Example
const array = [1, 2, 3]

function mutateArray(arr) {
  arr.pop()
}
mutateArray(array);
console.log(array)
  /* Output: [ 1, 2 ] -> This is example of side effects
   or function modifying array outside of itself*/


/* Pure Functions
1. No Side Effects -> Side Effects are when a function
modifies things outside of itself
2. Same Output Given Same Input */

//Pure Function Example
const array = [1, 2, 3]

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray
}

removeLastItem(array);
console.log(array)
console.log(removeLastItem(array));

/* Output: [ 1, 2, 3 ]  -> Example of No Side Effects
           [ 1, 2 ]  */


//Currying
/* Currying -> Process of taking a function with multiple
arguments and returning a series of functions that take
one argument and eventually resolve to a value. */ 

//const originalMultiply = (a, b) => a*b
const curriedMultiply = a => b => a*b

/* We can create several Utility Functions 
because of currying */
const curriedMultiplyBy5 = curriedMultiply(5)
const curriedMultiplyBy10 = curriedMultiply(10)

curriedMultiplyBy5(4) 
  //Console Output: 20
curriedMultiplyBy10(4)
  //Console Output: 40


/* Caching -> In computing, a cache is a high-speed data
storage layer which stores a subset of data in fast access
hardware such as RAM so that future requests for that data
are served up faster. Caching allows you to efficiently
reuse previously retrieved or computed data. */

/* Memoization -> caching the return value of a function 
based on its parameters. If the parameter of a function 
doesn't change subsequent times the function is called, 
then the function is memoized. */

//Example
let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    console.log('after long time:');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log('1,', memoizedAddTo80(5))
console.log('2,', memoizedAddTo80(5))
/*  Console Output: 
 
    after long time:
    1, 85

    2, 85      */


/* Composing or Composition -> System design principle that
any sort of data transformation that we do should be obvious.
There are libraries in JavaScript that have a compose function */

/* Custom compose function where f is the multiplyBy3
function and g is the makePositive function */
const compose = (f, g) => data => f(g(data))

const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)
  //Console Output: 150

  //FP - Amazon Shopping Example

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const amazonHistory = []

const compose = (f, g) => (...args) => f(g(...args));
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
  return fns.reduce(compose)
} 

function addItemToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
  amazonHistory.push(user)
  const {cart} = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, 
  user, {cart: updatedCart}) 
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, 
  {purchases: user.cart}
  )
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, 
  {cart: []})
}

amazonHistory


/* Error Handling in JavaScript */

function fail() {
  try { //run this piece of code
  console.log('this works')
  } catch (error) { //catch if error in code
  console.log('we have made an error')
  }
}

fail()
/*  Console Output:
    this works    */

function fail() {
  try { //run this piece of code
  consol.log('this works')
  } catch (error) { //catch if error in code
  console.log('we have made an error', error)
  }
}

fail()

/* Console Output: 
we have made an error ReferenceError: 
consol is not defined at ...*/



/* Data Structures in JavaScript */


//Arrays

  const strings = ['a', 'b', 'c', 'd'];
                  //0    1    2    3 

  strings[2] //o(1)
  //c

  //push 
  strings.push('e'); //o(1)
  //['a', 'b', 'c', 'd', 'e']
  //  0    1    2    3    4

  //pop
  strings.pop();  // o(1)
  //['a', 'b', 'c', 'd']
  //  0    1    2    3   

  //unshift
  strings.unshift('x'); //o(n)
  //['x', 'a', 'b', 'c', 'd']
  //  0    1    2    3    4

  //splice
  strings.splice(2, 0, 'alien');  //o(n/2) = o(n)
  // parameters -> 2 is for index location we want to add into, 0 is for deleting 0 items from array

  //['x', 'a', 'alien', 'b', 'c', 'd']
  //  0    1       2     3    4    5

  console.log(strings)
  //['x', 'a', 'alien', 'b', 'c', 'd']



//Common Data Structure Interview Questions

  /* Exercise: Reverse a String */

  /* Reverse 'Hi My name is Andrei' into 
  'ierdnA si eman ym iH' */

  function reverse(str) {
    //check to see if user input is a string
    if (!str || str.length < 2 || typeof str !== 'string') {
      return 'hmmm that is not good';
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]); 
      /* push each element of array starting from end and 
      going to beginning into backwards array */
    }
    return backwards.join(''); /* Join the elements of the
    backwards array into a complete string  */  
  }
  //Run reverse(str) function with parameters
  reverse('Hi my name is Andrei')
    //Output: 'ierdnA si eman ym iH'
  
  function reverse2(str) {
    return str.split('').reverse().join('')
  }
  reverse2('Hi my name is Andrei')
    //Output: 'ierdnA si eman ym iH'


  const reverse3 = str => [...str].reverse().join('') 
  reverse3('Hi my name is Andrei')
    //Output: 'ierdnA si eman ym iH'


    /* Exercise: Merge Sorted Arrays */

    /* mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]) 
    into [0, 3, 4, 4, 6, 30, 31]  */

    function mergeSortedArrays(array1, array2) {
      const mergedArray = [];
      let array1Item = array1[0];
      let array2Item = array2[0];
      let i = 1;
      let j = 1;
    
      //Check Input to see if there are empty arrays in which case we don't need to merge
      if (array1.length === 0) {
        return array2;
      }
    
      if (array2.length === 0) {
        return array1;
      }
    
      while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
          mergedArray.push(array1Item)
          array1Item = array1[i];
          i++
        } else {  //if array2Item > array1Item
          mergedArray.push(array2Item)
          array2Item = array2[j];
          j++
        }
      }
      return mergedArray;
    }
    
    mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
        //Output: [ 0, 3, 4, 4, 6, 30, 31 ]


    //Hash Tables or Objects in JavaScript
    let user = {
      age: 54,
      name: 'Kylie',
      magic: true,
      scream: function() {
        console.log('ahhhhhhhh!');
      }
    }
    
    user.age //o(1)
    user.scream //o(1)
    user.spell = 'abra kadabra'; //o(1)
    user
    /*  Console Output:
         {age: 54,
          name: 'Kylie',
          magic: true,
          scream: [Function],
          spell: 'abra kadabra'}  */
    

//Implementing a Hash Table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {  //Private Class
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      //hashing function
      hash = (hash + key.charCodeAt(i) * i) %
      this.data.length
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data
  }
  get (key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    } //If currentBucket is empty then
    return undefined
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000)
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2)
myHashTable.keys();

  //Console Output:  [ 'grapes', 'apples', 'oranges' ]

