"use strict";
const assert=require('assert');
//const { pid } = require('node:process');

const { isMainThread } = require('worker_threads');

const fun =require("./function.js");
describe("isPrime", function(){

         it("122 is prime",function(){
    assert.strictEqual(fun.isPrime(122), true);
});


         it("5is prime",function(){
    assert.strictEqual(fun.isPrime(5), false);
});

})



describe("areaOfcircle", function(){

         it("areaOfcircle",function(){
    assert.strictEqual(fun.teme(1), Math.PI);


})
})