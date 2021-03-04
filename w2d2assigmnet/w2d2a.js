// 4. Write a function expression and assign it to the variable
// greatestCommonDivisor, which will compute GCD (Greatest Common Divisor) of two
// numbers. GCD is the largest number that divides both. For example GCD of 20 and 28 is 4 and
// // GCD of 98 and 56 is 14.
   function greatestCommonDivisor(num1, num2){
       let largest =0;
       for(let i=2; i<=Math.min(num1, num2); i++){
           if(num1%i===0&&num2%i===0){
               largest=i;
           }
       }


   }
   console.log(greatestCommonDivisor(20,12));

// 5. Write a function expression to find LCM of any two numbers using the
// greatestCommonDivisor function from previous question. Assign it to the variable
// leastCommonMultiple. LCM of two numbers is the smallest number that can be
// divided evenly by both numbers. Write it as a function expression.

// program to find the HCF or GCD of two integers
let LCM;
function LCMofnumber(number1, number2){

//let hcf;
// take input
    //let number1; 
//prompt('Enter a first positive integer:
     //let number2;
//prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factornode  of both integers
    if( number1 % i == 0 && number2 % i !== 0) {
         LCM =number1*number2;
       console.log(LCM);
    }
}
//console.log(hcf);
}
console.log(LCMofnumber(30,100));

// // display the hcf
// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`)
// 6. Now write a new version of leastCommonMultiple that uses the
// greatestCommonDivisor function and the mathematical relationship between LCM
// and GCD to find the LCM. Research the LCM and GCD relationship online.
//let LCM;
// // take input
// const number1 = 30;
// //prompt('Enter a first positive integer: ');
// const number2 =20;`
// // prompt('Enter a second positive integer: ');
// let HCM;
// // looping from 1 to number1 and number2
// for (let i = 1; i <= number1 && i <= number2; i++) {

//     // check if is factor of both integers
//     if( number1 % i == 0 && number2 % i == 0) {
//         LCM= number1*number2;
//     } 
//     if (number1 % i == 0 && number2 



// 7. Write a function compute, that takes three parameters. First parameter is a call back
// function that does the actual operation, second and third are the operands.
// For e.g., compute (add, 2,3) should return 5
// - Write compute function as a function expression.
// - Write add function as a function expression and call compute passing add as a
// callback.
// o Refactor to pass add logic as an anonymous function. (Make a copy
// first)
// o Refactor to pass add logic as an arrow function. (Make a copy first)
// 4. When should you choose Function Declaration versus Function Expression and
// use function declarations when you want to create a function on the global scope and 
// make it available throughout your code.
//  Use function expressions to limit where the function is available, 
// keep your global scope light, and maintain clean syntax

// 5. Functions are values in JavaScript. They can be assigned, copied, or declared in any
// place of the code. Is this a true or a false statement? Support your answer with
// examples.
// inJavaScript, functions are objects. You can work with functions as if they were objects. 
// For example, you can assign functions to variables, to array elements, 
// and to other objects. 
// They can also be passed around as 
// arguments to other functions or be returned from those functions