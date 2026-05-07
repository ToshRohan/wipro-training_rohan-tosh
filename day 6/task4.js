// ### Question 4: The Automated Payroll Processor
// **Problem Statement:**
// You are developing a payroll system. You need to write a function calculatePayroll(employees, taxCallback) that applies tax deductions and calculates final payouts.
// **Requirements:**
// 1. Create a callback function (taxLogic) that determines the tax rate: If a salary is > 5000, the tax is 20%. Otherwise, the tax is 10%.
// 2. The calculatePayroll function should use this callback to process each employee.
// 3. Calculate the netSalary (Salary minus Tax). Add a property status to each employee: If the net salary is > 4000, set status to "Premium", otherwise set it to "Standard".
// 4. Use a Template Literal to log: "Payroll Processed: Total Net Payout is $[Z] for [X] employees."
// 5. The function must use setTimeout to wait 2000ms before returning the final array of processed employee objects.
// **Input Data Example:**
// ```javascript
// const employees = [
//  { id: 101, name: "Alice", salary: 6000 },
//  { id: 102, name: "Bob", salary: 3500 },
//  { id: 103, name: "Charlie", salary: 5200 }
// ];
// ```




const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

// Callback function for tax logic
function taxLogic(salary) {

  if (salary > 5000) {
    return 0.20; // 20% tax
  }

  return 0.10; // 10% tax
}

// Main payroll function
function calculatePayroll(employees, taxCallback) {

  let totalNetPayout = 0;

  const processedEmployees = employees.map(employee => {

    // Calculate tax
    const taxRate = taxCallback(employee.salary);
    const taxAmount = employee.salary * taxRate;

    // Calculate net salary
    const netSalary = employee.salary - taxAmount;

    // Add to total payout
    totalNetPayout += netSalary;

    // Determine status
    const status = netSalary > 4000
      ? "Premium"
      : "Standard";

    // Return updated employee object
    return {
      ...employee,
      tax: taxAmount,
      netSalary,
      status
    };
  });

  // Summary message
  console.log(
    `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`
  );

  // Delayed output after 2 seconds
  setTimeout(() => {
    console.log(processedEmployees);
  }, 2000);
}

// Function call
calculatePayroll(employees, taxLogic);