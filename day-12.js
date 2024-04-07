const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)];
    return newArr;
}

console.log(removeDuplicates([1,2,3,4,2,1]))