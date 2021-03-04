"use strict"
/** 
*   
* @param {number} num The number to raise.
* @return {boolean}    
*/
      //@param {number} 

function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }  
  console.log(isPrime(112));