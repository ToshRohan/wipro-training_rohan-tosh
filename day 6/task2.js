// ### Question 2: The E-Commerce Discount Applicator
// **Problem Statement:**
// You are building a promo-code system for a shopping cart. You need to write a function applyPromo(cart, promoCallback) that calculates which items qualify for a specific discount.
// **Requirements:**
// 1. **The Pipeline:** The applyPromo function should accept an array of product objects and a callback function.
// 2. **The Callback (isEligible):** You must define a separate callback function to be passed in. This callback should return true only if a product belongs to the **"Electronics"** category **AND** has a price greater than **$200**.
// 3. **Transformation:**
//   * Use the callback to identify eligible items.
//   * For those items, reduce their price by **10%**.
//   * Add a new property to **all** items in the array called isDiscounted (set to true for eligible items and false for others).
// 4. **Final Summary:** Once the processing is complete, use a **Template Literal** to log to the console: "Promotion applied! [X] items were discounted for a total saving of $[Y]."
// 5. **Delayed Return:** Wrap the final return statement in a setTimeout of **1000ms** to simulate a server calculation, returning the updated cart array.
// **Input Data Example:**
// ```javascript
// const cart = [
//  { name: "Smartphone", price: 800, category: "Electronics" },
//  { name: "Toaster", price: 50, category: "Home" },
//  { name: "Headphones", price: 250, category: "Electronics" },
//  { name: "Monitor", price: 150, category: "Electronics" }
// ];
// ```
// ### Instructions for Candidates:
// * Use const and let appropriately.
// * Ensure the code is clean and handles potential null or undefined values gracefully.
// * The final output for Question 1 must be a valid JSON string.




const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

// Eligibility callback
function isEligible(product) {
  return (
    product?.category === "Electronics" &&
    product?.price > 200
  );
}

// Main function
function applyPromo(cart, promoCallback) {

  let discountedItems = 0;
  let totalSavings = 0;

  const updatedCart = cart.map(product => {

    if (promoCallback(product)) {

      const discount = product.price * 0.10;

      discountedItems++;
      totalSavings += discount;

      return {
        ...product,
        price: product.price - discount,
        isDiscounted: true
      };
    }

    return {
      ...product,
      isDiscounted: false
    };
  });

  console.log(
    `Promotion applied! ${discountedItems} items were discounted for a total saving of $${totalSavings.toFixed(2)}.`
  );

  // Delayed output
  setTimeout(() => {
    console.log(updatedCart);
  }, 1000);
}

// Function call
applyPromo(cart, isEligible);