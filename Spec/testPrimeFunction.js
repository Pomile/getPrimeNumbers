'use strict'
const assert = require('chai').assert;
const myApp = require("../apps/getPrime.js");


describe("Get prime tests",function(){
    it("should return [2,3] for 3",function(){
        assert(myApp.getPrimes(3)).toEqual([2,3]);
    })

    it("should return [2,3,5] for 6",function(){
        assert(myApp.getPrimes(6)).toEqual([2,3,5]);
    })

    it("should return [2,3,5,7] for 7",function(){
        assert(myApp.getPrimes(7)).toEqual([2,3,5,7]);
    })


    it("should return [2,3,5,7,11,13] for 6",function(){
        assert(myApp.getPrimes(15)).toEqual([2,3,5,7,11,13]);
    })

    it("should return [2,3,5,7,11,13,17,19] for 20",function(){
        assert(myApp.getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
    })
})