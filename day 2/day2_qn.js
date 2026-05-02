//qn1
function formatGuests(names) {
    names.shift(); // remove host

    return names
        .map(name => `Guest: ${name}`)
        .join("\n");
}

//qn2
const getHighNumbers = (arr) => {
    const threshold = Math.floor(Math.random() * 50) + 1;

    return arr
        .filter(item => typeof item === "number")
        .filter(num => num > threshold);
};

//qn3
const prices = ["100", "200", "50", "handling"];

const calculateTotal = (arr) => {
    arr.pop(); // remove handling fee

    const sum = arr
        .map(price => Number(price))
        .reduce((acc, val) => acc + val, 0);

    return `Total Price: $${sum}`;
};

console.log(calculateTotal(prices));


