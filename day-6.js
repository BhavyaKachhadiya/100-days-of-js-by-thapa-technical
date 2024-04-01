// DAY-6

/**
 * The function `isPalindrome` checks if a given string is a palindrome by comparing it to its reverse
 * version after removing non-alphanumeric characters and ignoring case.
 * @param str - The `isPalindrome` function takes a string `str` as input and checks if it is a
 * palindrome.
 * @returns The function `isPalindrome` is returning `true` if the input string is a palindrome (reads
 * the same forwards and backwards), and `false` otherwise.
 */
const isPalindrome = (str) =>{
    str = str.toLowerCase().replace("/\W/g","");
    const r_str = str.split("").reverse().join("");
    return str===r_str ? true : false;
}

console.log(isPalindrome("naman"));
console.log(isPalindrome("hello"));