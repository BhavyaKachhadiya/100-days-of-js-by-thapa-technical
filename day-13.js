// DAY-13

/**
 * The function `countVowels` takes a string as input and returns the count of vowels (both lowercase
 * and uppercase) in the string.
 * @param str - The `countVowels` function takes a string `str` as input and counts the number of
 * vowels (both lowercase and uppercase) in the string. It then returns the total count of vowels found
 * in the string.
 * @returns The `countVowels` function returns the number of vowels (a, e, i, o, u) found in the input
 * string `str`.
 */
const countVowels = (str) => {
    let vowels = ['a','e','i','o','u'];

    let arr = str.split('');

    let countVowel = 0;
    for (let char of arr) {
        if (vowels.includes(char.toLowerCase())) {
            countVowel++;            
        }
    }
    return countVowel;
}

console.log(countVowels("Hello World"));