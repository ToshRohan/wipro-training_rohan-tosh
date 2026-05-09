// JavaScript Practice Problems – Full Solutions

// ==================================================
// 1. Variables & Data Types

// 1. Swap Two Numbers Without Third Variable

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// 2. Check Data Type

let value = true;

if (typeof value === "number") {
console.log("Number");
} else if (typeof value === "string") {
console.log("String");
} else if (typeof value === "boolean") {
console.log("Boolean");
} else if (value === null) {
console.log("Null");
} else if (typeof value === "undefined") {
console.log("Undefined");
}

// 3. Celsius to Fahrenheit

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit);

// 4. Simple Calculator

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 5. Calculate Age

let birthYear = 2005;
let currentYear = 2026;

let age = currentYear - birthYear;

console.log(age);

// 2. Strings

// 1. Reverse a String

let str = "hello";
let reversed = "";

for(let i = str.length - 1; i >= 0; i--) {
reversed += str[i];
}

console.log(reversed);

// 2. Count Vowels

let str = "javascript";
let count = 0;

for(let i = 0; i < str.length; i++) {
let ch = str[i].toLowerCase();

```
if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    count++;
}
```

}

console.log(count);

// 3. Palindrome String

let str = "madam";
let reversed = "";

for(let i = str.length - 1; i >= 0; i--) {
reversed += str[i];
}

if(str === reversed) {
console.log("Palindrome");
} else {
console.log("Not Palindrome");
}

// 4. Capitalize First Letter

let str = "i am learning javascript";
let words = str.split(" ");
let result = "";

for(let i = 0; i < words.length; i++) {
result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
}

console.log(result);

// 5. Longest Word

let str = "I am learning javascript deeply";
let words = str.split(" ");
let longest = "";

for(let i = 0; i < words.length; i++) {
if(words[i].length > longest.length) {
longest = words[i];
}
}

console.log(longest);

// 3. Numbers & Math

// 1. Random Number

let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

// 2. Prime Number

let num = 13;
let isPrime = true;

for(let i = 2; i < num; i++) {
if(num % i === 0) {
isPrime = false;
break;
}
}

console.log(isPrime ? "Prime" : "Not Prime");

// 3. Factorial

let num = 5;
let factorial = 1;

for(let i = 1; i <= num; i++) {
factorial *= i;
}

console.log(factorial);

// 4. Fibonacci Series

let n = 10;
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for(let i = 3; i <= n; i++) {
let c = a + b;
console.log(c);
a = b;
b = c;
}

// 5. Armstrong Number

let num = 153;
let temp = num;
let sum = 0;

while(temp > 0) {
let digit = temp % 10;
sum += digit ** 3;
temp = Math.floor(temp / 10);
}

console.log(sum === num ? "Armstrong" : "Not Armstrong");

// 4. Arrays

// 1. Largest and Smallest Number

let arr = [5, 2, 9, 1, 7];
let largest = arr[0];
let smallest = arr[0];

for(let i = 1; i < arr.length; i++) {
if(arr[i] > largest) {
largest = arr[i];
}

```
if(arr[i] < smallest) {
    smallest = arr[i];
}
```

}

console.log(largest);
console.log(smallest);

// 2. Remove Duplicates

let arr = [1,2,2,3,4,4,5];
let unique = [];

for(let i = 0; i < arr.length; i++) {
if(!unique.includes(arr[i])) {
unique.push(arr[i]);
}
}

console.log(unique);

// 3. Sort Without sort()

let arr = [5, 3, 8, 1];

for(let i = 0; i < arr.length; i++) {
for(let j = 0; j < arr.length - 1; j++) {
if(arr[j] > arr[j + 1]) {
let temp = arr[j];
arr[j] = arr[j + 1];
arr[j + 1] = temp;
}
}
}

console.log(arr);

// 4. Second Largest Number

let arr = [10, 20, 5, 40, 30];
let largest = -Infinity;
let second = -Infinity;

for(let i = 0; i < arr.length; i++) {
if(arr[i] > largest) {
second = largest;
largest = arr[i];
} else if(arr[i] > second && arr[i] !== largest) {
second = arr[i];
}
}

console.log(second);

// 5. Merge Arrays and Remove Duplicates

let a = [1,2,3];
let b = [3,4,5];

let merged = [...a, ...b];
let unique = [...new Set(merged)];

console.log(unique);

// 5. Objects

// 1. Student Object

let student = {
name: "Rohan",
age: 20,
course: "BCA"
};

for(let key in student) {
console.log(key, student[key]);
}

// 2. Count Object Keys

let obj = {
a: 1,
b: 2,
c: 3
};

console.log(Object.keys(obj).length);

// 3. Merge Objects

let obj1 = {a:1};
let obj2 = {b:2};

let merged = {...obj1, ...obj2};

console.log(merged);

// 4. Object to Array

let obj = {
name: "Rohan",
age: 20
};

console.log(Object.entries(obj));

// 5. Shopping Cart Total

let cart = {
apple: 100,
banana: 50,
mango: 80
};

let total = 0;

for(let item in cart) {
total += cart[item];
}

console.log(total);

// 6. Loops

// 1. Star Pyramid

for(let i = 1; i <= 5; i++) {
let star = "";

```
for(let j = 1; j <= i; j++) {
    star += "*";
}

console.log(star);
```

}

// 2. Multiplication Tables

for(let i = 1; i <= 10; i++) {
for(let j = 1; j <= 10; j++) {
console.log(`${i} x ${j} = ${i*j}`);
}
}

// 3. Sum of Even Numbers

let sum = 0;

for(let i = 1; i <= 100; i++) {
if(i % 2 === 0) {
sum += i;
}
}

console.log(sum);

// 4. Prime Numbers 1 to 100

for(let num = 2; num <= 100; num++) {
let prime = true;

```
for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        prime = false;
        break;
    }
}

if(prime) {
    console.log(num);
}
```

}

// 5. Number Guessing Game

let secret = 7;
let guess = 7;

while(guess !== secret) {
console.log("Try Again");
}

console.log("Correct Guess");

// 7. Functions

// 1. Greatest of Three Numbers

function greatest(a, b, c) {
return Math.max(a, b, c);
}

console.log(greatest(10, 20, 30));

// 2. Number Palindrome

function palindrome(num) {
let original = num;
let reversed = 0;

```
while(num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

return original === reversed;
```

}

console.log(palindrome(121));

// 3. Currency Converter

function convert(amount, rate) {
return amount * rate;
}

console.log(convert(100, 83));

// 4. Return Even Numbers

function evenNumbers(arr) {
return arr.filter(num => num % 2 === 0);
}

console.log(evenNumbers([1,2,3,4,5,6]));

// 5. Calculator Functions

function add(a,b) {
return a+b;
}

function subtract(a,b) {
return a-b;
}

function multiply(a,b) {
return a*b;
}

function divide(a,b) {
return a/b;
}

console.log(add(5,2));
console.log(subtract(5,2));
console.log(multiply(5,2));
console.log(divide(5,2));

// 8. Scope & Hoisting

// 1. Hoisting Example

console.log(a);
var a = 10;

// 2. Block Scope

{
let x = 20;
console.log(x);
}

// 3. Closure Example

function outer() {
let count = 0;

```
return function() {
    count++;
    return count;
}
```

}

let counter = outer();

console.log(counter());
console.log(counter());

// 4. Nested Functions

function outer() {
let name = "Rohan";

```
function inner() {
    console.log(name);
}

inner();
```

}

outer();

// 5. Scope Debugging

function test() {
if(true) {
let x = 10;
console.log(x);
}
}

test();

// 9. Callback Functions & setTimeout

// 1. Delayed Greeting

setTimeout(() => {
console.log("Hello");
}, 2000);

// 2. Countdown Timer

let count = 5;

let timer = setInterval(() => {
console.log(count);
count--;

```
if(count < 0) {
    clearInterval(timer);
}
```

}, 1000);

// 3. Callback Calculator

function calculator(a, b, callback) {
return callback(a, b);
}

function add(a,b) {
return a+b;
}

console.log(calculator(5,3,add));

// 4. Food Ordering System

function orderFood(callback) {
console.log("Ordering Food...");

```
setTimeout(() => {
    callback();
}, 2000);
```

}

function foodReady() {
console.log("Food Delivered");
}

orderFood(foodReady);

// 5. Sequential Execution

function step1(callback) {
console.log("Step 1");
callback();
}

function step2() {
console.log("Step 2");
}

step1(step2);

// 10. Arrow Functions

// 1. Arrow Function

const add = (a,b) => {
return a+b;
}

console.log(add(2,3));

// 2. One Line Arrow Function

const square = num => num * num;

console.log(square(5));

// 3. map() with Arrow

let arr = [1,2,3];

let doubled = arr.map(num => num * 2);

console.log(doubled);

// 4. Even/Odd Checker

const check = num => num % 2 === 0 ? "Even" : "Odd";

console.log(check(5));

// 5. Grade Calculator

const grade = marks => {
if(marks >= 90) return "A";
if(marks >= 80) return "B";
return "C";
}

console.log(grade(85));

// 11. map(), filter(), forEach()

// 1. Double Numbers

let arr = [1,2,3];

let result = arr.map(num => num * 2);

console.log(result);

// 2. Filter Students

let marks = [70,85,95,60];

let result = marks.filter(mark => mark > 80);

console.log(result);

// 3. forEach()

let arr = [1,2,3];

arr.forEach(num => console.log(num));

// 4. Uppercase Names

let names = ["rohan", "rahul"];

let upper = names.map(name => name.toUpperCase());

console.log(upper);

// 5. Even Numbers

let arr = [1,2,3,4,5,6];

let even = arr.filter(num => num % 2 === 0);

console.log(even);

// 12. Primitive vs Reference Types

// 1. Primitive Copy

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

// 2. Object Reference

let obj1 = {name:"Rohan"};
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1);

// 3. Clone Object

let obj1 = {name:"Rohan"};
let obj2 = {...obj1};

obj2.name = "Rahul";

console.log(obj1);
console.log(obj2);

// 4. Array Reference Equality

let a = [1,2];
let b = [1,2];

console.log(a === b);

// 5. Shallow Copy

let arr1 = [1,2,3];
let arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);

// 13. Stack & Heap Memory

// 1. Stack Memory

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

// 2. Heap Memory

let obj1 = {value:10};
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value);

// 3. Object Mutation

let user = {
name: "Rohan"
};

function update(obj) {
obj.name = "Rahul";
}

update(user);

console.log(user);

// 4. Predict Output

let x = {a:1};
let y = x;

y.a = 5;

console.log(x.a);

// 14. Call Stack

// 1. Nested Calls

function one() {
two();
}

function two() {
three();
}

function three() {
console.log("End");
}

one();

// 2. Recursive Factorial

function factorial(n) {
if(n === 1) {
return 1;
}

```
return n * factorial(n - 1);
```

}

console.log(factorial(5));

// 3. Recursive Fibonacci

function fibonacci(n) {
if(n <= 1) {
return n;
}

```
return fibonacci(n-1) + fibonacci(n-2);
```

}

console.log(fibonacci(6));

// 4. Stack Overflow Example

function test() {
test();
}

// test();

// 15. JSON Problems

// 1. JSON String to Object

let json = '{"name":"Rohan"}';

let obj = JSON.parse(json);

console.log(obj);

// 2. Object to JSON String

let obj = {
name: "Rohan"
};

let json = JSON.stringify(obj);

console.log(json);

// 3. Parse API Data

let data = '{"users":[{"name":"Rohan"},{"name":"Rahul"}]}'

let obj = JSON.parse(data);

console.log(obj.users[0].name);

// 4. Employee Records

let employees = [
{id:1, name:"Rohan"},
{id:2, name:"Rahul"}
];

console.log(employees);

// 5. Filter JSON Data

let students = [
{name:"A", marks:80},
{name:"B", marks:40}
];

let passed = students.filter(student => student.marks >= 50);

console.log(passed);

// ==================================================
// Logic Building Challenges
// ==================================================

// 1. Missing Number

let arr = [1,2,3,5];
let n = 5;

let expected = (n * (n + 1)) / 2;
let actual = arr.reduce((a,b) => a+b, 0);

console.log(expected - actual);

// 2. Anagram Check

function anagram(a,b) {
return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(anagram("listen", "silent"));

// 3. Rotate Array

let arr = [1,2,3,4,5];
let k = 2;

for(let i = 0; i < k; i++) {
arr.unshift(arr.pop());
}

console.log(arr);

// 4. Duplicate Elements

let arr = [1,2,2,3,4,4];
let duplicates = [];

for(let i = 0; i < arr.length; i++) {
if(arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
duplicates.push(arr[i]);
}
}

console.log(duplicates);

// 5. Flatten Nested Array

let arr = [1,[2,[3,4]],5];

function flatten(arr) {
let result = [];

```
for(let item of arr) {
    if(Array.isArray(item)) {
        result = result.concat(flatten(item));
    } else {
        result.push(item);
    }
}

return result;
```

}

console.log(flatten(arr));

// ==================================================
// Debugging Challenges
// ==================================================

// 1. Infinite Loop Fix

for(let i = 0; i < 10; i++) {
console.log(i);
}

// 2. Undefined Return Fix

function add(a,b) {
return a+b;
}

console.log(add(2,3));

// 3. Array Sorting Fix

let arr = [10,2,5,1];

arr.sort((a,b) => a-b);

console.log(arr);

// 4. Scope Issue Fix

function test() {
let x = 10;
console.log(x);
}

test();

// 5. Callback Order Fix

function first(callback) {
console.log("First");
callback();
}

function second() {
console.log("Second");
}

first(second);

// ==================================================
