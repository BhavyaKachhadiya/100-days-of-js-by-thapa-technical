// DAY - 2

/**
 * The function `generateHash` takes a string, capitalizes the first letter of each word, joins them
 * together, adds a "#" at the beginning, and returns the resulting string.
 * @param word - day 2 of JS
 */
const generateHash = (word)=>{
    const Spliting = word.split(" ");
    const UpperCasing = Spliting.map((val)=>val[0].toUpperCase()+val.slice(1))
    const Joining = UpperCasing.join("");
    const AddHash = `#${Joining}`
    return AddHash
}

console.log(generateHash("day 2 of JS"));