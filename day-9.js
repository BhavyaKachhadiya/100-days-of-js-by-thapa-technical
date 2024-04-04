// DAY-9
/**
 * The function calculates the average of an array of numbers.
 * @param arr - [1, 2, 3]
 * @returns The `calculateAverage` function is returning the average of the numbers in the array `[1,
 * 2, 3]`, which is `2`.
 */
const calculateAverage = (arr) => {return  (arr.reduce((pre,cur)=>pre + cur,0))/arr.length;}

console.log(calculateAverage([1,2,3]));