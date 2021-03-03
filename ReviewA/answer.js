// 4. A university library that loans book to students, faculty, and the public has a written policy that
// determines how long someone may borrow a book before it is due, which is shown on the table
// below. Write a defining table and JavaScript program that determines how long a person may
// borrow a book.
// Status Number of books Overdue Loan duration in weeks
// Student 0 6
// fewer than 3 4
// 3 or more 2
// Faculty 0 12
// fewer than 3 10
// 3 or more 8
// Other 0 4
// fewer than 3 3
// 3 or more 2
// let prompt= require('prompt-sync')();
// let status=prompt("your status: student,faculty,others ");
// let numberOfBooks=+prompt("how much book you want to borrrow?");
// let loanDurationinWeek="";
// if(status==="student"){
//     if(numberOfBooks===0){
//         loanDurationinWeek="6";
//     }
//     else if(numberOfBooks>0&&numberOfBooks<3){
//         loanDurationinWeek="4";
//     }
//   else if(numberOfBooks>=3){
// loanDurationinWeek="2"
// }
// }

// if(status==="faculty"){
//     if(numberOfBooks===0){
//         loanDurationinWeek="12";
//     }
//     else if(numberOfBooks>0&&numberOfBooks<3){
//         loanDurationinWeek="10";
//     }
// else if(numberOfBooks>=3){
// loanDurationinWeek="8"
// }
// }

// if(status==="other"){
//     if(numberOfBooks===0){
//         loanDurationinWeek="4";
//     }
//     else if(numberOfBooks>0&&numberOfBooks<3){
//         loanDurationinWeek="3";
//     }
// else if(numberOfBooks>=3){
// loanDurationinWeek="2"
// }
// }
// console.log("Loan duration in week is: "+loanDurationinWeek);

// 1. A prime number (or a prime) is a natural number greater than 1 that is not a product of two
// smaller natural numbers. In other words, it is a number that is only perfectly divisible by number
// 1 and itself. Write a JavaScript program to test weather user input is a prime number or not.
// a. Your logic should be based on factor count. i.e., prime number will have 0 factors (not
// counting 1 and itself), while composite will have 1 or more factors.
// b. This time think of a logic to use break statement so that you can break early from the
// loop, right when you know number is not prime. For example, you know number 8 is not
// prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
// testing is not required. If the number is prime loop will proceed until the end.
//Q1
// ||||||a||
// let prompt= require('prompt-sync')();
// let pNum=+prompt("enter a number")
// let count=0;
// for(let i=2;i<pNum;i++){
//     if(pNum%i===0){
//         count++}
// }
// if(count===0){
//     console.log("prime number")
// }
// else{
//     console.log("is not prime")
// }
// /
// b
// let pNum=+prompt("enter a number")

// for(let i=2;i<pNum;i++){
//     if(pNum%i===0){

//         console.log("is not prime")
//     break;

//     }
//     else{
//         console.log("prime number")
//     }
//     // break;
//     }
// program to find the factorial of a number

// take input from the user
// let prompt= require('prompt-sync')();
// const number = parseInt(prompt('Enter a positive integer: '));
// let fact = 1;
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
    
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }00000000
//     console.log(`The factorial of ${number} is ${fact}.`);
// }




// var x,y,row;
// for(x=1; x<=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     row=row+("*");        
//       }
//  console.log(row);
//  //
//  row='';    
// }

// ouptput 
//   *
//   **
//   ***
//   ****
//   *****
//   ******
// 3. Write a JavaScript program that gives the user three tries to guess the correct pin of the
// account. You set the pin as a constant. When correct display “Correct, welcome back.” When
// incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
// locked out.”
// let prompt= require('prompt-sync')();
// let guess = prompt("Enter your pin number form 1 to 9 ");
// const pin ="0000";
// if(pin===guess){
//  console.log("correct, welcom back")
// }
//  else{
// console.log("incorrect, try again ")
// guess = prompt("please the enter  pin again");
// if(pin===guess){
// console.log("correct, welcom back")
// }else{
// console.log("incorrect, try again ")
// guess = prompt("Enter the enter your pin number");
// if(pin===guess){
// console.log("correct, welcom back")
// }else{
// console.log("sorry but You have been locked out")
// }
//  } 
//  }
// 3. An employee at a grocery store must frequently place boxes of cans in stacks. Write a program
// that allows him to enter the total number of boxes and the number of boxes he will place in
// each stack. Your program must output the number of stacks he will have to make. All the stacks
// except the last one must have the exact number of boxes that the employee specifies. The last
// stack must have the exact number or fewer boxes. For example, if the employee enters 74 total
// boxes and 6 boxes in each stack your program must output 13.
// let prompt= require('prompt-sync')();
// let totalBox=+prompt("please enter total number of boxes in stack")
// let EachBox=+prompt("please enter number of boxes to be placed in stack")
// let numStack=totalBox/EachBox
// // console.log(numStack)
// let exactNum=Math.ceil(numStack)
// console.log(exactNum)
// exactNum--
// console.log(parseFloat(exactNum));
// 5. When you exercise to strengthen your heart, you should maintain your heart rate within a
// range. To find that range, subtract your age from 220. This difference is your maximum heart
// rate per minute. Your heart simply will not beat faster than this maximum (220 − age). When
// exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of
// your heart’s maximum. Write a JavaScript program that asks for a person’s age and computes
// // and outputs the slowest and fastest rates necessary to strengthen his heart.
//  let prompt= require('prompt-sync')();
// let age=+prompt("enter your age")
// let myMuxRange=220-age;
// console.log("Muximum heart rate is: "+myMuxRange)
// let slowest=0.65*myMuxRange
// let fastest=0.85*myMuxRange
// console.log("The slowest rate is: "+slowest)

// const prompt = require("prompt-sync")();

// let n = prompt("Please enter a number to test if it is pime: ");
// let isPrime = true;

// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime); 

//let number1=20;
//let number2=40;
let hcf;
function HCMofnumber(number1, number2){

//let hcf;
// take input
    //let number1; 
//prompt('Enter a first positive integer: ');
     //let number2;
//prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
       return hcf = i;
    }
}
//console.log(hcf);
}
console.log(HCMofnumber(20, 24));

