'use strict'; 

//Recursion of a function is a situation when the the function reffers to it self; 

//The first 'n' Natural Number Sum will be ->

function sumNNaturalNumberSum(n){
    // during building this type of function the first thing it takes is the base case; 
    //the Base Case is that -> The fundamental case when the function is not called recursively; 
    // for this function the base case is -> F(n) = 1 when n = 1.
    // the 2nd case is the Recursive situation -> F(n) <+,-,*,/,%> F(n-1) -> situation 
    let natural = n > 0 ? n : 1 //did this only for not letting the call stack getting full with the function executions; 
    if(natural == 1 ){
        return 1; 
    } else {
        return natural + sumNNaturalNumberSum(n - 1); 
    }
};

console.log(sumNNaturalNumberSum(10));
// factorial : represented as n! and whose general form is -> n*(n-1)*(n-1)*...*(3)*(2)*1 . 

function factorial(n){
    n = Math.abs(Number(n)) //Math.abs -> take a number and returns the absolute value; 
    if(n == 1){
        return 1 
    } else {
        return n * factorial(n - 1)
    }
}; 

console.log(factorial(5)); 


function toThePower(number, power){
    if(power == 0){
        return 1 
    } else {
        return number * toThePower(number, power - 1)
        // when F(2,2) -> n * F(n, p -1) -> when n=2 and p=2 then -> 2 * F(2, 1) -> at p=1 in the F(2,2) then -> 
        // 2*2*1 the 1 at the end is due to p=1 
    }
}; 

console.log(toThePower(2,3)); 