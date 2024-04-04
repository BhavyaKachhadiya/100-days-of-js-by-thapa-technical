// DAY-8

/**
 * The factorial function calculates the factorial of a non-negative integer using recursion.
 * @param num - The `num` parameter in the `factorial` function represents the number for which you
 * want to calculate the factorial. The factorial of a non-negative integer `n`, denoted as `n!`, is
 * the product of all positive integers less than or equal to `n`.
 * @returns The factorial function is being returned.
 */

/**
 * The factorial function calculates the factorial of a given number using recursion in JavaScript.
 * @param num - 0
 * @returns 1 
 * @param num - 1
 * @returns  1
 * @param num - 2
 * @returns  2
 * @param num - 3
 * @returns  6
 * @param num - 4
 * @returns  24
 * @param num - 5
 * @returns  120
 */
const factorial = (num)=>{
    if(num < 0) return false;
    else if(num === 0) return 1;
    else return factorial(num-1) * num;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));