// DAY-14

/**
 * The function `isPowerOfTwo` checks if a given number is a power of two.
 * @param num - The `num` parameter in the `isPowerOfTwo` function represents the number that we want
 * to check if it is a power of two. The function checks if the given number is a power of two by
 * iterating through the powers of two (2^0, 2^1,
 * @returns The function `isPowerOfTwo` returns a boolean value indicating whether the input number is
 * a power of two.
 */
const isPowerOfTwo = (num) => {
    let output = false;
    for (let i = 0; i <num; i++) {
        if (2**i === num){
            output = true;
        }
    }
    return output;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));