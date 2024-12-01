// Writing expressions with variables


//EXERCISE 1
//In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". 
//Then add a line of code to print the variable name to the console after the previous message.
//Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix it.

const myName = "Maria";
console.log(myName);


//EXERCISE 2
//Create a variable called age with a number that is your age. Do not use string quotes for numbers.
//Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.

const numAge = 36;
console.log(numAge);


//EXERCISE 3
//Create a variable called juliaAge with a value 32. 
//Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. Save the file and reload the page. 
//You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

const numJuliaAge = 32;
const ageDiff = numAge - numJuliaAge;
console.log(ageDiff);


//Writing code with CONDITIONALS 
//Conditionals are forms used in programming to tell the computer to do different things, depending on some test, e.g., "if the user is logged in, say "Hi", else say "Please log in."
// The most basic conditional form is if...else...

//EXERCISE 4
// Write a conditional that compares the variable with your age with the number 21. 
//It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. 
//Save your JavaScript file and reload the page. Make sure you see the correct message. 
//Try changing your age in the JavaScript file to make sure the other message prints when it should.

if (numAge > 21) {
    console.log("You are older than 21");
} else { console.log("You are not older than 21")};


//EXERCISE 5
//Write a conditional that compares your age with Julia's age. 
//This conditional will need to test if you are older, younger, or the same age, and print, appropriately, 
//either "Julia is older than you", "Julia is younger than you", or "You have the same age as Julia". 
//Save your changes and reload the file.

if (numAge > numJuliaAge) {
    console.log("Julia is younger than I am");
}
else if (numAge < numJuliaAge) {
    console.log("Julia is older than I am");
}
else if (numAge === numJuliaAge) {
        console.log("I have the same age as Julia");
    }


//JavaScript ARRAYS

//EXERCISE 6
//Create an array with all the names of your class (including mentors). 

const classArray = ["Dima", "Diogo", "Hasan", "Jonas", "Maria", "Raúl", "Thomas"];
// print the first element of the array in the console.
console.log(classArray[0]);

//print the last element of the array in the console.
const lastName = classArray[classArray.length - 1];
console.log(lastName);

// print all the elements of the array in the console (use a "for" loop).

for (let i = 0; i < classArray.length; i++) {
    console.log(classArray[i]);
}


/* Looping over an Array
EXERCISE 7
Create an array with all the ages of the students in your class. 
Iterate the array using a while loop, and then print every age in the console. 
Add a conditional inside the while loop to only print even numbers. */
console.log('While')
const classAges = [26, 31, 38, 20, 36, 37, 32];

let i = 0;
while (i < classAges.length) {
    console.log(classAges[i]);
    i = i + 1;;
}

console.log('For Each')
classAges.forEach(age => {
    console.log(age);
});

