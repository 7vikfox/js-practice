//expect Function
//📌 Problem

//Write a function expect that helps developers test their code.

//It should take a value val and return an object with two functions:

//Functions:
//toBe(val2)
//Returns true if val === val2
//Otherwise throws "Not Equal"
//notToBe(val2)
//Returns true if val !== val2
//Otherwise throws "Equal"

var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) return true;
            throw new Error("Not Equal");
        },

        notToBe: function(otherVal) {
            if (val !== otherVal) return true;
            throw new Error("Equal");
        }
    };
};
