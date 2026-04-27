//createCounter (Object Version)
//📌 Problem

//Write a function createCounter.

//It should accept an initial integer init and return an object with three functions:

//Functions:
//increment()
//Increases value by 1 and returns it
//decrement()
//Decreases value by 1 and returns it
//reset()
//Resets value back to initial init and returns it

var createCounter = function(init) {
    let current = init;

    return {
        increment: function() {
            current++;
            return current;
        },

        decrement: function() {
            current--;
            return current;
        },

        reset: function() {
            current = init;
            return current;
        }
    };
};
