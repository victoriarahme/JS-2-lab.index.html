let number = 0 // Assign any number here
 
if (number > 0) {
    console.log('number is greater than 0');
    // Output for positive numbers
}

else if (number < 0) {
    console.log('number is not greater than 0');
    // Output for negative numbers

} else {
    // Output for zero
}
var day = '1';

switch (day) {
    case '1':
        // Output Sunday
        console.log('Monday');
        break;
    // Add more cases
case '2':
        console.log('Tuesday');
        break;
case '3':
        console.log('Wednesday');
        break;
 case '4':
        console.log('Thursday');
        break;      
case '5':
        console.log('Friday');
case '6':
        console.log('Saturday');
        break;
case '7':
        console.log('Sunday');
        break;
Default:
        console.log('Unknown day');
       
}

//step 4//

//for//
    for (var day = 1; day < 5; day++) {
        console.log("Day " + day + " of the week");
    }
console.log("Lets take a break");


//while loop//

var day = 1; 

while (day < 5) {
    console.log("It is day number " + day + " of the week.");
    day++; //Add 1 to the 'age' in each round.
}

//do..while loop//

var daysOfWeek = 0;

do {
    console.log("Working shifts this week number: " + (daysOfWeek + 1));
    daysOfWeek++;
} while (daysOfWeek < 3);

console.log("No more shifts for now.");

//Step 5: Control Flow with break and continue
for (var day = 1; day <= 10; day++) {
    if (day === 3) {
        break; // Exit the loop when i = 7
    }
    console.log(day);
}
console.log("Loop exited at day = 3");

let globalVar = "I'm global!";
console.log(globalVar);
 
function scopeExample() {
    let localVar = "I'm local!"; 
    console.log(localVar);
    // Access globalVar and localVar inside the function
}
