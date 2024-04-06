// DAY-11

/**
 * The function `sumOfDigits` takes a number as input, converts it to an array of digits, and returns
 * the sum of those digits.
 * @param num - The `num` parameter in the `sumOfDigits` function represents the number for which you
 * want to calculate the sum of its digits. In the example provided, `num` is set to 1234, so the
 * function will calculate the sum of the digits of the number 1234.
 * @returns The function `sumOfDigits` takes a number as input, converts it to an array of its digits,
 * and then calculates the sum of those digits.
 */
const sumOfDigits = (num) => {
    let arrOfNum = Array.from(String(num),Number);
    return arrOfNum.reduce((pre,cur)=>pre += cur,0)
}

console.log(sumOfDigits(1234));