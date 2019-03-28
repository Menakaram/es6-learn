"use strict";

//var a = 'Test1';
//var b = 'Test2';
//var

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _marked = /*#__PURE__*/regeneratorRuntime.mark(g1);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log(a);
  }
  console.log(a);
}
//let
function testLet() {
  var a = 30;
  if (true) {
    var _a = 50;
    console.log(_a);
  }
  console.log(a);
}
testVar();
testLet();

for (var i = 0; i < 10; i++) {
  console.log(i);
}
//console.log(i);  Incase of let, it shows reference error
//const
var colors = [];

colors.push('red');
colors.push('blue');
//colors = 'Green'; It shows error, bcoz in const we can push but can't change
console.log(colors);

//classes

var User = function () {
  function User(username, email, password) {
    _classCallCheck(this, User);

    this.username = username;
    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: 'register',
    value: function register() {
      console.log(this.username + ' is now registered');
      console.log(this.email);
      //console.log(this.password);
    }
  }], [{
    key: 'check',
    value: function check() {
      console.log('Checking.....');
    }
  }]);

  return User;
}();

User.check();
var me = new User('me@gmail.com', 'password'); //any no. of arg can be passed
me.register(); //me.check() gives error as it is static method

//Inheritance

var Member = function (_User) {
  _inherits(Member, _User);

  function Member(username, email, password, memberPackage) {
    _classCallCheck(this, Member);

    var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, username, email, password));

    _this.Package = memberPackage;
    return _this;
  }

  _createClass(Member, [{
    key: 'getPackage',
    value: function getPackage() {
      console.log(this.username + ' is subscribed to ' + this.Package + ' package');
    }
  }]);

  return Member;
}(User);

var menu = new Member('menu', 'menu@gmail.com', 'pswd', 'standard');
menu.register();
menu.getPackage();

//template literals
function makeUpperCase(word) {
  return word.toUpperCase();
}

var name = 'menu';
var template = '<h1>' + makeUpperCase('Hello') + ',' + name + '</h1>\n                <p>Welcome</p>'; //you can use + or just as it is --> <h1></h1><p></p>

document.getElementById('template').innerHTML = template;

//String and Number Methods
var string = 'Hi, Mena is a good girl';
console.log(string.startsWith('Hi'));
console.log(string.endsWith('girl'));
console.log(string.includes('good'));
console.log(string.includes('girl'));

console.log(0xF);
console.log(2);
console.log(73);

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

function greet($greeting) {
  //console.log($greeting);
}

greet('Greetings Mena');

function greet() {
  var $greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Greetings Mena';

  console.log($greeting);
}

greet();

var a1 = [1, 2, 3];
var a2 = [4, 5, 6];

function check() {
  console.log(a1 + ',' + a2);
}
check.apply(undefined, a1.concat(a2));

//set,map

var arr = [1, 9, 6, 12, 24];
var set = new Set(arr);

set.add('100');
set.add({ a: 2, b: 3 });
set.delete(1);
//set.clear(); --clears all


//console.log(set.size);
console.log(set);

set.forEach(function (val) {
  console.log(val);
});

var map = new Map([['a1', 'Hello'], ['b2', 'Bye']]);
map.set('c3', 'check');
//map.set(1); // Only has key value pairs
//map.delete('a1');
console.log(map);
//console.log(map.size);

var weakset = new WeakSet();
var car1 = {
  make: 'Honda'
};
var car2 = {
  make: 'Toyota'
};
weakset.add(car1);
weakset.add(car2);
weakset.delete(car1);

console.log(weakset);

var weakmap = new WeakMap();

var key = {
  id: 1
};

weakmap.set(key, car1);
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
function Prefixer(prefix) {
  this.prefix = prefix;
}

//Doubt
Prefixer.prototype.prefixArray = function (arr) {
  var _this2 = this;

  return arr.map(function (x) {
    console.log(_this2.prefix + x);
  });
};

var pre = new Prefixer('Check');
pre.prefixArray(['Ram', 'Nirmala']);
/*
let add = function(a,b){
  let sum = a+b;
  console.log(sum);
}*/
var add = function add(a, b) {
  var sum = a + b;
  console.log(sum);
};
add(1, 3);

//promises

//var promise = Promise.resolve('Foo');//immediately resolved
//promise.then((res) => console.log(res));

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    return resolve(4);
  }, 2000);
});

promise.then(function (res) {
  res += 3;
  console.log(res);
});

function getData(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function (data) {
  var todos = JSON.parse(data);
  var output = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var todo = _step.value;

      output += '<li>\n               <h3>' + todo.title + '</h3>\n               <p>Completed:' + todo.completed + '</p>\n             </li>';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.getElementById('template').innerHTML = output;
}).catch(function (err) {
  console.log(err);
});

//Generators
function g1() {
  return regeneratorRuntime.wrap(function g1$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Check g1');
          _context.next = 3;
          return 'Yield....';

        case 3:
          console.log('checking...');
          _context.next = 6;
          return 'Yielding....';

        case 6:
          return _context.abrupt('return', 'Returned');

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
var g = g1();
//console.log(g.next().value);
//console.log(g.next());//to yield 2

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = g[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var val = _step2.value;

    console.log(val);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}