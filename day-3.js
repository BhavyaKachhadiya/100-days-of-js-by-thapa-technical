// Day -3

/**
 * The function `countChar` takes a string and a character as input, and returns the count of how many
 * times that character appears in the string.
 * @param str - "This is function will count the character"
 * @param char - c
 * @returns The function `countChar` is returning the count of the character "c" in the given string
 * "This is function will count the character".
 */
const countChar = (str,char) => {
    const words = str.toLowerCase().split("");
    let count=0;
    words.map((word)=>{
        if(word === char)
        {
            count = count + 1;
        }
    })
    return count;
}

console.log(countChar("This is function will count the character","c"));