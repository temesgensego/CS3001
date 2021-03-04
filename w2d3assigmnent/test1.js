
"use strict"
/** 
*   
* @param {number} radius The number to raise.
* @return {number}    Returns boolean
*/
      //@param {number} 


function areaOfCircle(radius) {
  let area =  Math.PI * Math.pow(radius,2);
  return  area;
}
//console.log(Math.PI
function volumeOfCylinder(height){
let area = areaOfCircle(1);
let volume = area*height;
return volume;
}
console.log(volumeOfCylinder(2));