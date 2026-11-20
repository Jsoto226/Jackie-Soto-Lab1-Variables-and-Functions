// Pauls After Office Hours Code for step 1
// // Conditions to renting a car
// Establish Variables
// let age = 30;

// if (age >= 25){
//     console.log(`You are ${age} years old. You may rent a car!`)
// } else {
//     console.log ("Sorry, you're not old enough to rent")
// }

function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input";
    }

    return `${lastName}, ${firstName}`;
}
