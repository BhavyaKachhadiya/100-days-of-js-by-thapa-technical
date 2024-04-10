//DAY-15
/**
 * The function `sumOfSquares` calculates the sum of squares of all elements in an array.
 * @param arr - An array of numbers for which the sum of squares needs to be calculated.
 * @returns The `sumOfSquares` function is returning the sum of the squares of all the elements in the
 * input array `arr`.
 */
const sumOfSquares = (arr) => {
    return arr.reduce((pre, cur) => pre = pre + (cur * cur),0)
}

console.log(sumOfSquares([1, 2, 3]))