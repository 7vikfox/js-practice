//Counter Function
//📌 Problem

//Given an integer n, return a counter function.

//This counter function should:

//Initially return n
//Then return n + 1, n + 2, n + 3, ... on each subsequent call

var createCounter = function(n) {
    return function() {
        return n++;
    };
};
