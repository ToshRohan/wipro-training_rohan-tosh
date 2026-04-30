let a = 2;
let b = 7;

let str = "Rohan Tosh";

console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (1-5):", str.substring(1, 5));
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);






console.log("Outside block, l:", l); // 5
console.log("Outside block, v:", v); // 20
console.log("Outside block, v:", v); // 20

let arr = [1, "Aaryan", 3, true, 5];
let arr2 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr2.length; i++) {  
//     console.log("Element at index after * 2 ", i, ":", arr2[i] * 2);
// }
// let count = arr2.length - 1;
// while (count >= 0) {
//     console.log("Element at index after * 2 ", count, ":", arr2[count] * 2);
//     count--;
// }

// arr2.forEach(function(x) {
//     console.log("Element after * 2 ", x, ":", x * 2);
// });
// arr2.map(function(x) {
//     console.log("Element after * 2 ", x, ":", x * 2);
// });

let i = 0;
let j = 10;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

// Calendar --> Week --> final (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)

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