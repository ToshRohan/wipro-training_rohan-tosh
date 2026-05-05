//qn1
function formatGuests(names) {
    let result = [];

    for (let i = 1; i < names.length; i++) {
        result.push("Guest: " + names[i]);
    }

    return result.join("\n");
}

let guests = ["Aaryan", "Arush", "Arushi"];

console.log(formatGuests(guests));

//qn2
let arr = [1, 2, true, "name", 5, 40, "50", 80];

let threshold = Math.floor(Math.random() * 50) + 1;

console.log("Threshold:", threshold);

arr
  .filter(x => typeof x === "number") 
  .filter(x => x > threshold)          
  .forEach(x => console.log("High number:", x));

//qn3
const prices = ["100", "200", "50", "handling"];

const calculateTotal = (arr) => {
    arr.pop(); 

    const sum = arr
        .map(price => Number(price))
        .reduce((acc, val) => acc + val, 0);

    return `Total Price: $${sum}`;
};

console.log(calculateTotal(prices));


