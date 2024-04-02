// DAY-7

/**
 * The function `findMax` takes an array as input and returns the maximum value in the array using the
 * `Math.max` method.
 * @param arr - An array of numbers.
 * @returns The `findMax` function is returning the maximum value from the array `arr` using the
 * `Math.max` function along with the spread operator (`...`) to pass the array elements as arguments.
 */
const findMax = (arr)=>{
    return Math.max(...arr);
}

console.log(findMax([2,3,5,6,1,4]));
console.log(findMax([-24,-2,-2,]));