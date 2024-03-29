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