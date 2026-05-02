let a = 5;
let b = 10;

let str = "Rohan Tosh";

// String operations
console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (1-5):", str.substring(1, 5)); 

// Mathematical operations
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b); 

// Logical operations --> bool
console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a == b:", a == b); 
console.log("a != b:", a != b); 
console.log("a >= b:", a >= b); 
console.log("a <= b:", a <= b); 

let obj = {
    name: "Alice",
    age: 30,
    city: "New York"
}
console.log("Object:", obj);
console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("City:", obj.city);

// String str = "Aryan"; int a = 5; boolean b = true;
let str2 = "Aryan";
let a2 = 5;
let b2 = true;

str2 = 23;
console.log("str2:", str2); // str2 is now a number, demonstrating dynamic typing in JavaScript`

function add(a, b) {
    return a + b;
}

console.log("Function add(5, 10):", add(5, 10)); // 15

const c = 5; 
console.log(c);

let l = 5;
var v = 6;

{
    let l = 10;
    var v = 20;
    console.log("Inside block, l:", l);
    console.log("Inside block, v:", v);
}

console.log("Outside block, l:", l);
console.log("Outside block, v:", v);

let arr = [1, "Aaryan", 3, true, 5];
let arr2 = [1, 2, 3, 4, 5];


let i = 0;
let j = 10;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

let choice = "a";

switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}

console.log(typeof choice, typeof a, typeof b, typeof str, typeof obj, typeof arr); // typeof operator to check the type of variables
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(typeof element === "number") {
        console.log(element, "is a number");
    }
    // console.log(element, typeof element); 
}