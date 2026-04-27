//📌 Problem

//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//💡 Details
//The returned function should ignore all inputs
//It must always return the string "Hello World"

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};


 
