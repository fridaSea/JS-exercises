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

const myAge = 36;
console.log(myAge);


//EXERCISE 3
//Create a variable called juliaAge with a value 32. 
//Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. Save the file and reload the page. 
//You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

const numJuliaAge = 32;
const ageDiff = myAge - numJuliaAge;
console.log(ageDiff);


//Writing code with CONDITIONALS 
//Conditionals are forms used in programming to tell the computer to do different things, depending on some test, e.g., "if the user is logged in, say "Hi", else say "Please log in."
// The most basic conditional form is if...else...

//EXERCISE 4
// Write a conditional that compares the variable with your age with the number 21. 
//It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. 
//Save your JavaScript file and reload the page. Make sure you see the correct message. 
//Try changing your age in the JavaScript file to make sure the other message prints when it should.

if (myAge > 21) {
    console.log("You are older than 21");
} else { console.log("You are not older than 21")};


//EXERCISE 5
//Write a conditional that compares your age with Julia's age. 
//This conditional will need to test if you are older, younger, or the same age, and print, appropriately, 
//either "Julia is older than you", "Julia is younger than you", or "You have the same age as Julia". 
//Save your changes and reload the file.

if (myAge > numJuliaAge) {
    console.log("Julia is younger than I am");
}
else if (myAge < numJuliaAge) {
    console.log("Julia is older than I am");
}
else if (myAge === numJuliaAge) {
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
const classAges = [26, 31, 38, 36, 20, 37, 32];

let m = 0;
while (m < classAges.length ) {
    console.log(classAges[m]);
    m = m + 1;
}


console.log('While-Even')
let n = 0;
while (n < classAges.length ) {
    if ((classAges[n] % 2 === 0)){
        console.log(classAges[n]);
    }
    n = n + 1;
}

/*
Write another a loop, but use a "for" loop instead of a "while" loop. 
*/

console.log('For')
for (let i=0; i < classAges.length; i++ ) {
    console.log(classAges[i]);
}

console.log('ForEven')
for (let i=0; i < classAges.length; i++ ) {
    if (classAges[i] % 2 === 0){
        console.log(classAges[i]);
    }
}



/* Exercise 8
Use a loop to find the sum of all the elements of the ages array. 
*/

//debugger;
console.log('Summe')

let sum = 0;
for (let i = 0; i < classAges.length; i++) {
    sum = sum + classAges [i]; // sum += classAges [i]
}
console.log(sum)



// zum Verständnis berechnet: 
//sum = ( classAges [0] + classAges [1] +  classAges [2] +  classAges [3] +  classAges [4] +  classAges [5] +  classAges [6] )
//console.log ( sum )

//const arr = [23, 34, 77, 99, 324]; let sum = 0; for (let i = 0; i < arr. length; i++) 
  //  { sum += arr[i]; } console. log(sum); Die Summe des Zahlen-Arrays wird berechnet, indem das Array durchlaufen wird und der Wert jedes Array-Elements zu einer Variablen namens sum hinzugefügt wird 


/* Exercise 9
Use a loop to add the even numbers of an array. For example, const array = [1, 2, 8, 3, 2]; 
would result in the sum of 2 + 8 + 2, since they are even numbers. Print the result to the console. */

console.log('Summe even numbers')

let sumEven = 0;
for (let i = 0; i < classAges.length; i++) {
    if (classAges[i] % 2 === 0){
        sumEven = sumEven + classAges[i];
    }
}
console.log(sumEven)

/* Exercise 10
Use a loop to add the numbers at even index positions of an array. 
For example, the const array = [1, 2, 8, 3, 2, 3, 4]; would result in the sum of 8 + 2 + 4 since they are in even positions in the array 
(ie, index positions 2, 4, and 6). Print the result to the console. */

console.log('Summe even index')

function evenIndexSum() {
    let sumEvenIndex = 0;
    for (let i = 0; i < classAges.length; i++) {
        if (i % 2 === 0){
            sumEvenIndex = sumEvenIndex + classAges[i];
        }
    }
    return sumEvenIndex;
}

console.log(evenIndexSum());


//FUNCTIONS
//Exercise 11
//Write a JavaScript function that returns nothing and has no parameters. 
//This function should print the result of the multiplication of two numbers (the numbers that you want).
console.log('functions-11')

function product() {
    console.log(product = 2*3);
}
product()

/* Exercise 12
Write a JavaScript function with no parameters. 
This function should return the result of the multiplication of two numbers (the numbers that you want), 
and in your main program, you should print the result.
Tip: if a function returns something, you can assign the function call to a variable. 
In this way, the value of the return will be held by this variable. */ 

console.log('functions-12')
function product2() {
    console.log(product2 = 5*6);
    return product2;
}

product2()

/*Exercise 13
Write a JavaScript function with two parameters. 
These parameters are the numbers that have to be multiplied. 
The function should return the result of the multiplication of both numbers (the numbers that you want), 
and in your main program, you should print the result. Test the function with 3 examples. */

console.log('functions-13')

function product3(number1, number2) {
    return number1 * number2;
}

console.log(product3 (2, 4))
console.log(product3 (2, 10))
console.log(product3 (4, 4))


/* Exercise 14
Write a function that determines the type of a triangle given the length of its three sides: Equilateral, Isosceles, or Scalene. (gleichseitig, gleichschenklig oder ungleichseitig.) */

console.log('triangle') 
//if else


/*Exercise 15
Write a function to find and print the lowest number in an array to the console. */

/*
console.log('lowest number in an array')

!! TRY
var arr = [5,1,9,5,7];
for (var i=0; i<1; i++) {
    arr.sort();
}
return arr[0];
!!TRY

let lowest = 0
for (let i = 0; i < birthyear.length; i++) {
    if bithyear[i]<>
    lowest =
    
    console.log (lowest)

const birthyears = [1988 , 1986, 1992 , 2005, 1980];

function birthyear(arr){
for (let i = 0; i < birthyear.length; i++) {
    for (let j=0; j<birthyear[i+1]; j++){
        if (birthyear[j] < birthyear[j+1]){
            let a = birthyear[j]
            let b = birthyear[j+1]
            birthyear[j] = b
            birthyear[j+1] = a 
        }
    } 
}return arr;
}
*/


/* Exercise 17
Write a function that receives two parameters: an array, and an index. 
The function will print the value of the element at the given index position. 
For example, given the following array and index, the function will print '6':
const array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
const index = 1; */

console.log('IndexElement')

function indexElement(array, index) {
    console.log(array[index]);
}

const array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
const index = 12;
indexElement(array, index); 


/* Exercise 18
Write a simple JavaScript function to join all elements of the following array into a single string:
const myColor = ["Red", "Green", "White", "Black"];
You should see the following in your console: "Red Green White Black" */

console.log('ArrayIntoString')
const myColors = ["Red", "Green", "White", "Black"] 

function colorString() {
    let colorString = "";
    for (let i = 0; i < myColors.length; i++) {
        colorString = colorString + " " + myColors [i]; 
    }
    return(colorString);
}

console.log(colorString());

/* Exercise 19
Write a JavaScript function that reverses a number. For example, if const x = 32443;, then the output should be 34423. */

console.log('Reverse a number')

/* const x = 32443

let y = 0
for (let i=0; i < x.length; i++ ) {
    y = x[i]
    console.log(x[i]);
}

console.log(y)
*/

/* Noch erledigen: 
Exercise 10 
Exercise 14
Exercise 15
Exercise 16
Exercise 18 - 0 bzw. leerzeichen am anfang der aufzählung + mIT FUNCTION Wird es stufenweise angeziegt und nicht in einer zeile  */

console.log('DONE')