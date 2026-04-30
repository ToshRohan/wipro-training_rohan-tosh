//qn1
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);


//qn2
function checkType(value) {
  if (typeof value === "number") {
    console.log("This is a number");
  } else if (typeof value === "string") {
    console.log("This is a string");
  } else {
    console.log("Unknown type");
  }
}

checkType(27);
checkType("Rohan");
checkType(true);

//qn3
let fullName = "John Doe";

let first= fullName.substring(0, 1);
let space = fullName.indexOf(" ");
let second = fullName.substring(space + 1, space + 2);

let initials = first + second;

console.log(initials);

//qn4
let messy = " Javascript is fun ";

let clean = messy.trim().toLowerCase();

//qn5
let cart = ["Bread", "Butter", "Cheese"];
cart.push("Milk");     
cart.unshift("Eggs"); 
cart.pop();            
console.log(cart);

//qn6
let numbers = [10, 20, 30, 40, 50];
let search1 = 30;
let search2 = 50;
let exists = false;
let index = -1;

for (let i = 0; i < numbers.length; i++) {
  switch (numbers[i]) {
    case search1:
      exists = true;
      break;
  }
}

for (let i = 0; i < numbers.length; i++) {
  switch (numbers[i]) {
    case search2:
      index = i;
      break;
  }
}

console.log(exists);
console.log(index); 

