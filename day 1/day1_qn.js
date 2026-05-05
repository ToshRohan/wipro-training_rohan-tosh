//qn1
let a= 5;
let b =6;


//before swapping
console.log("Before Swapping, a:", a)
console.log("Before Swapping, b:", b)

//swapping
let temp =a;
a=b;
b= temp;

//After Swapping

console.log("After Swapping, a:", a)
console.log("After Swapping, b:", b)

//qn2
function checkType(input) {
    if (typeof input === "number") {
        console.log("This is a number");
    } else if (typeof input === "string") {
        console.log("This is a string");
    } else if(typeof input === "obj"){
        console.log("This is a object");
    } else if (typeof input === "boolean"){
        console.log("This is a boolean")

    }else {
        console.log("Unknown type")
    }
}

const obj ={
    name:"James",
    age: 5
}
checkType(true)
checkType("Hello")
checkType(5)
checkType("12")
checkType(obj)

//qn3
let fullName = "John Doe";

let first_name_initial = fullName[0];

let last_name_initial = fullName[fullName.indexOf(" ")+ 1];

let final_name = first_name_initial + last_name_initial;
console.log(final_name);

//qn4
let messy = " Javascript is fun ";

let remove_spaces = messy.trim().toLowerCase();

console.log(remove_spaces);

//qn5
let cart = ["bread", "sugar", "tea"];

cart.push("Milk");
cart.unshift("Eggs");
cart.pop();

console.log(cart);

//qn6
let numbers = [10,20,30,40,50];

let check_value = numbers.includes(30);
let find_index = numbers.indexOf(50);

console.log(check_value);
console.log(find_index);