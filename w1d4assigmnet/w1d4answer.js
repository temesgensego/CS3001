// Q1 1. A prime number (or a prime) is a natural number greater than 1 that is not a product of two
// smaller natural numbers. In other words, it is a number that is only perfectly divisible by number
// 1 and itself. Write a JavaScript program to test weather user input is a prime number or not.
// a. Your logic should be based on factor count. i.e., prime number will have 0 factors (not
// counting 1 and itself), while composite will have 1 or more factors.
// b. This time think of a logic to use break statement so that you can break early from the
// loop, right when you know number is not prime. For example, you know number 8 is not
// prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
// testing is not required. If the number is prime loop will proceed until the end
//    A answer
//     const num = 67;
//    // prompt('Enter a positive number: ');
   
//    console.log(`The factors of ${num} is:`);
   
//    // looping through 1 to num
//    for(let i = 1; i <= num; i++) {
   
//        // check if number is a factor
//        if(num % i == 0) {
//            console.log(i);
//        }
//    }


     // other way
        
// // take input
// const num = 19;
// //prompt('Enter a positive number: ');

// console.log(`The factors of ${num} is:`);

// //looping through 1 to num
// for(let i = 1; i <= num; i++) {

//     // check if number is a factor
//     if(num % i == 0) {
//         console.log(i);
//     }
// }





     //B answer 
     
// let i = 2;

// while (i < 20) {
//   if (i === 3) {
//     break;
//   }
//   i = i + 1;
// }

// console.log(i);


// Q2A2
//Write a Java program to calculate the factorial value of a given number
// / program to find the factorial of a number

// // take input from the user
// const number = +parseInt(prompt('Enter a positive integer: '));

// // checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }

//Q3A3
// 3. Write a JavaScript program that gives the user three tries to guess the correct pin of the
// account. You set the pin as a constant. When correct display “Correct, welcome back.” When
// incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
// locked out.”
// program Starts:  
// Please enter pin: 
// 22132  
// Output: 
// Incorrect, try again.
// Please enter pin: 
// 23412  
// Output: 
// Incorrect, try again.
// Please enter pin: 
// 12345 
// Output: 
// Correct, welcome back.

// Program Starts:  
// Please enter pin: 
// 22132  
// Output: 
// Incorrect, try again.
// Please enter pin: 
// 23412  
// Output: 
// Incorrect, try again.
// Please enter pin: 
// 00000 
// Output: 
// Sorry but you have been locked out. 

// Q5A5
// Write a JavaScript program to compute sum of all the digits in a given integer number.
// Input Output
// 123 6
// 102 3
// 8 8
// var value = 123,
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// console.log(sum);


//Q6A6
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//     console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += i + " ";
//     }
//     console.log(row);
// }

let prompt= require('prompt-sync')();
let user_input =prompt("please enter ");
console.log(user_input);
