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
 * @param num - 0, 1, 2, 3, 4, 5
 * @returns factorial(0) 1 
 * @returns factorial(1) 1
 * @returns factorial(2) 2
 * @returns factorial(3) 6
 * @returns factorial(4) 24
 * @returns factorial(5) 120
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