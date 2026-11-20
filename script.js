// Pauls After Office Hours Code for step 1
// // Conditions to renting a car
// Establish Variables
// let age = 30;

// if (age >= 25){
//     console.log(`You are ${age} years old. You may rent a car!`)
// } else {
//     console.log ("Sorry, you're not old enough to rent")
// }

// Task 1

function formatFullName (firstName, lastName) {
    if(!firstName || !lastName) {
        return "Invalid name input.";
    }

firstName = firstName.trim();
lastName = lastName.trim();

if(!firstName || !lastName) {
        return "Invalid name input.";
    }
// let name = "john";
// // console.log(name.toUpperCase());

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
return lastName + ", " + firstName;
}

// console.log(formatFullName("JOHN","SMITH"));

// Task 2

function calculateTotalCost(price, quantity, taxRate) {
if (!Number.isFinite(price) ||
    !Number.isFinite(quantity) ||
    !Number.isFinite(taxRate)) {
    return "Invalid input.";
}

let totalCost = (price * quantity) * (1 + taxRate);

return totalCost;

}

// console.log(calculateTotalCost (10, 2, 0.07));
// console.log(calculateTotalCost (16, 5, 0.09));

// Task 3

function checkEligibility(age, isEmployed){
    if (age <= 18) {
        return "Not eligible";
    } 
    else if (isEmployed === true) {
        return "Eligible";
    }
    else {
        return "Conditionally eligible";
    }
}
console.log(checkEligibility (17, true));
console.log(checkEligibility (26, true));
console.log(checkEligibility (23, false));

