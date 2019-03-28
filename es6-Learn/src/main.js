"use strict"

//var a = 'Test1';
//var b = 'Test2';
//var
function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a);
  }
    console.log(a);
}
//let
function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);
  }
    console.log(a);
}
testVar();
testLet();

for(let i = 0; i<10;i++){
  console.log(i);
} 
//console.log(i);  Incase of let, it shows reference error
//const
const colors = [];

colors.push('red');
colors.push('blue');
//colors = 'Green'; It shows error, bcoz in const we can push but can't change
console.log(colors);

//classes
class User{
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
  }
  static check(){
    console.log('Checking.....');
  }
  register(){
    console.log(this.username+' is now registered');
    console.log(this.email);
    //console.log(this.password);
  }
}

User.check();
let me = new User('me@gmail.com','password');//any no. of arg can be passed
me.register();//me.check() gives error as it is static method

//Inheritance
class Member extends User{
  constructor(username,email,password,memberPackage){
    super(username,email,password);
    this.Package = memberPackage;
  }
  getPackage(){
    console.log(this.username+' is subscribed to '+ this.Package+' package');
  }
}


let menu = new Member('menu','menu@gmail.com','pswd','standard');
menu.register();
menu.getPackage();

//template literals
function makeUpperCase(word){
  return word.toUpperCase();
}

let name = 'menu';
let template = `<h1>${makeUpperCase('Hello')},${name}</h1>
                <p>Welcome</p>`;//you can use + or just as it is --> <h1></h1><p></p>

document.getElementById('template').innerHTML = template

//String and Number Methods
let string = 'Hi, Mena is a good girl';
console.log(string.startsWith('Hi'));
console.log(string.endsWith('girl'));
console.log(string.includes('good'));
console.log(string.includes('girl'));

console.log(0xF);
console.log(0b10);
console.log(0o111);

//console.log(Number.isFinite(-1));//true
//console.log(Number.isFinite(Infinity));//false
//console.log(Number.isNaN(-1));//false
//console.log(Number.isNaN(NaN));//true
//console.log(Number.isNaN('check'));//false
//console.log(Number.isNaN(1));//false
//console.log(Number.isInteger('1'));//false
//console.log(Number.isInteger(1));//true
//console.log(Number.isInteger(Infinity));//false
//console.log(Number.isInteger(-1));//true


//Default Params and Spread Operator

function greet($greeting){
  //console.log($greeting);
}

greet('Greetings Mena');

function greet($greeting = 'Greetings Mena'){
  console.log($greeting);
}

greet();

let a1 = [1,2,3];
let a2 = [4,5,6];

function check(){
  console.log(a1+','+a2);
}
check(...a1,...a2);



//set,map

let arr = [1,9,6,12,24];
let set = new Set(arr);

set.add('100');
set.add({a:2,b:3});
set.delete(1);
//set.clear(); --clears all


//console.log(set.size);
console.log(set);

set.forEach(function(val){
  console.log(val);
});

let map = new Map([['a1','Hello'],['b2','Bye']]);
map.set('c3','check');
//map.set(1); // Only has key value pairs
//map.delete('a1');
console.log(map);
//console.log(map.size);

let weakset = new WeakSet();
let car1 = {
  make:'Honda'
}
let car2 = {
  make:'Toyota'
}
weakset.add(car1);
weakset.add(car2);
weakset.delete(car1);

console.log(weakset);

let weakmap = new WeakMap();

let key = {
  id:1
}

weakmap.set(key,car1);
console.log(weakmap);


//arrow functions
/*
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
  let that = this;
  return arr.map(function(x){
    console.log(that.prefix+x);
  });
}

let pre = new Prefixer('Check');
pre.prefixArray(['Ram','Nirmala']);*/
function Prefixer(prefix){
  this.prefix = prefix;
}

//Doubt
Prefixer.prototype.prefixArray = function(arr) {
  return arr.map((x) => {
    console.log(this.prefix+x);
  });
}

let pre = new Prefixer('Check');
pre.prefixArray(['Ram','Nirmala']);
/*
let add = function(a,b){
  let sum = a+b;
  console.log(sum);
}*/
let add = (a,b) => {
  let sum = a+b;
  console.log(sum);
}
add(1,3);

//promises

//var promise = Promise.resolve('Foo');//immediately resolved
//promise.then((res) => console.log(res));

var promise = new Promise(function(resolve,reject){
  setTimeout(() => resolve(4),2000); 
});

promise.then((res)=>{
  res+=3;
  console.log(res);
});

function getData(method,url){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else{
         reject({
           status: this.status,
           statusText: xhr.statusText
       });
       }
    };
    xhr.onerror = function(){
         reject({
           status: this.status,
           statusText: xhr.statusText
       });
       };
      xhr.send();
  });
}

getData('GET','http://jsonplaceholder.typicode.com/todos').then(function(data){
  let todos = JSON.parse(data);
  let output = '';
  for(let todo of todos){
    output+=`<li>
               <h3>${todo.title}</h3>
               <p>Completed:${todo.completed}</p>
             </li>`
  }
  document.getElementById('template').innerHTML = output;
}).catch(function(err){
  console.log(err);
});


//Generators
function *g1(){
  console.log('Check g1');
  yield 'Yield....';
  console.log('checking...')
  yield 'Yielding....';
  return 'Returned';
}
var g = g1();
//console.log(g.next().value);
//console.log(g.next());//to yield 2

for(let val of g){
  console.log(val);
}
