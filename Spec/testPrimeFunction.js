'use strict'
const assert = require('chai').assert;
const myApp = require("../apps/getPrime.js");


describe("Get prime tests",function(){
    it("should return [2,3] for 3",function(){
        assert(myApp.getPrimes(3)).toEqual([2,3]);
    })
})