// Q1
// W1d5 Functions
// 1. checkPrime
// a. Write a function named checkPrime that accepts a parameter and returns true if the
// argument is a prime number otherwise returns false.
// b. Now write a program that prompts user to input a number and calls the function
// checkPrime to see if the entered number is a prime number or not.
// 1. A answer 

// function isPrime(num) {
//     for(let i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }  
//   console.log(isPrime(112));
// 1 B
// let prompt= require('prompt-sync')();
// let user_input =prompt("please enter ");
// console.log(user_input);
//Q2
// 2. volumeOfCylinder
// a. Write a function, areaOfCircle, that computes and returns area of a circle based on the
// value of input radius.
// b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
// of the areaOfCircle function.
// c. Write code to call and test your function. 
// 2 A answer
// function areaOfCircle(radius) {
//     let area =  Math.PI * Math.pow(radius,2);
//     return  area;
//   }
//   //console.log(Math.PI

//   console.log(areaOfCircle(2));


// 2 b answer 


// function areaOfCircle(radius) {
//   let area =  Math.PI * Math.pow(radius,2);
//   return  area;
// }
// //console.log(Math.PI
// function volumeOfCylinder(height){
// let area = areaOfCircle(1);
// let volume = area*height;
// return volume;
// }
// console.log(volumeOfCylinder(2));

// Q3
// 3. Write a program that calculates the total volume of a house, including the volume of the roof
// space. Your program must allow the user to enter width, depth, height and sweep as shown in
// figure below. Write code to call and test your function.
// Here are some helpful formulas:
// houseVolume = livingVolume + roofVolume
// livingVolume = width * height * depth
// roofVolume = triangleArea*depth
// triangleArea = √s(s−a)(s−b)(s−c)
// s = (a+b+c)/2
// Write separate functions for each of the named formulas

let prompt= require('prompt-sync')();
const w =prompt("please enter width");
const h=prompt("please enter height");
const d  =prompt("please enter depth");
const s =prompt("please enter sweep");

function  volumeOfBase(width,height,depth){
  return wedth*height*depth;
}
function volumeOfRoof(sweep, height,width){
return ((2*sweep +width)/2) * height
}
function totalVolumeOfHouse(){
  let totalVolume= volumeOfBase(w,h,d) + volumeOfRoof(w,s,d)
  return totalVolume;
}

//
console.log(totalVolumeOfHouse());


  
