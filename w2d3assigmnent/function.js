"use strict"
exports.isPrime=isPrime;
exports.teme=areaOfCircle;
/** 
*   
* @param {number} num The number to raise.
* @return {boolean}    Returns boolean
*/
      //@param {number}
      
function areaOfCircle(radius) {
     let area =  Math.PI * Math.pow(radius,2);
      return  area;
          }
        
        
function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }  
  console.log(isPrime(112));