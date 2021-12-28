// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* 
(function main() {
console.log("Hey There !! "+ 1);
console.log("Hey There !! "+2);
setTimeout(()=>{
  console.log("Hey There !! "+4);
},0)
console.log("Hey There !! "+3);
})();
*/

var adderFn = function (val) {
  return val + 1;
};

var subFn = function (val) {
  return val - 1;
};

Array.prototype.adder = function (func) {
  let arr = [];

  for (var i = 0; i < this.length; i++) {
    arr[i] = func(this[i]);
  }

  return arr;
};

const added = [1, 2, 3].adder(subFn);
console.log(added);

var emp = {
  name: 'Raja',
  getName: function () {
    console.log('Hey There !! From My Method ' + this.name);
  },
};

emp.getName();

var emp2 = {
  name: 'Rana',
};

emp.getName.call(emp2);

var emp12 = emp.getName.bind(emp2);

console.log('Hey There !! From My Method');
console.log(emp12);

emp12();

var fnc = function () {
  let counter = 0;

  return function () {
    return counter++;
  };
};

var fgh = fnc();

console.log('Hey There !! From My Method ' + fgh());

console.log('Hey There !! From My Method 2 ' + fgh());

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    // console.log("Hello There !! From flatten function");
    // console.log(flat);
    // console.log("Hello There !! From flatten function 2");
    // console.log(flatten);
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

// Usage:
console.log('Hello There !! Before Flatten');
console.log(
  flatten([
    [1, 2, 3],
    [4, 5],
  ])
); // [1, 2, 3, 4, 5]
flatten([
  [[1, [1.1]], 2, 3],
  [4, 5],
]); // [1, 1.1, 2, 3, 4, 5]

var sum12 = function (num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
};

var sum = function (num1) {
  return function (num2) {
    if (num2) {
      return sum(num1 + num2);
    } else {
      return num1;
    }
  };
};

console.log('Hey There !! From My JS By CodeJudge');
console.log(sum(1)(2)(3));

//Output->[2,3,4]
// Add your javascript here

var fd = document.getElementById("myDiv");

console.log("Hey There !!");
console.log(fd);

var d = document.createDocumentFragment();

for(var i=0;i<5;i++) {

var node = document.createElement("DIV");
node.innerHTML = "CARD";
// document.getElementById("myDiv").appendChild(node);

d.appendChild(node);
if(fd) {
fd.appendChild(d);
}
console.log("Hey There !! From My Method");
console.log(node);
}

