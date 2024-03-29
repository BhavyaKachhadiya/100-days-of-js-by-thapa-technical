// DAY-1

/**
 *  * The function `findLongestWord` takes a sentence as input and returns the longest word in the
 * sentence.
 * @param word - "Hi My is name is Bhavya Kachhadiya"
 * @returns The function `findLongestWord` is returning the longest word from the input string "Hi My
 * is name is Bhavya Kachhadiya".
 */
const findLongestWord = (word) => {
    if (word.trim().length === 0) { return false; }

    const Words = word.split(" ");
    const Longest = Words.reduce(
        (pre, cur) => (cur.length > pre.length ? cur : pre), ""
    );
    return Longest
}

console.log(findLongestWord("Hi My is name is Bhavya Kachhadiya"));