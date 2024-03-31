// DAY-5

/**
 * The function sortAscending takes an array of numbers and returns a new array with the numbers sorted
 * in ascending order.
 * @param arr - The `arr` parameter is an array of numbers that you want to sort in ascending order. In
 * the example provided, the array `[5, 4, 3, 2, 1]` is passed to the `sortAscending` function, and the
 * function sorts these numbers in ascending
 * @returns The `sortAscending` function is being called with an array `[5,4,3,2,1]`, which is then
 * sorted in ascending order using the `sort` method with a comparison function `(a, b) => a - b`. The
 * sorted array `[1, 2, 3, 4, 5]` is being returned.
 */
const sortAscending = (arr) =>{
    return arr.sort((a,b)=> a-b)
}

console.log(sortAscending([5,4,3,2,1]));