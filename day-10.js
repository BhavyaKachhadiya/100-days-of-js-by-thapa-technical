// DAY-10
/**
 * The function `arrAreEquals` compares two arrays to check if they are equal in terms of length and
 * elements.
 * @param arr1 - [1, 2, 3] 
 * @param arr2 - [1, 2, 3]
 * @returns true
 */
const arrAreEquals = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    if (arr1.length === 0 && arr2.length === 0) return true;
    
   return arr1.every((cur,index)=>{
        cur===arr2[index];
    })
}

console.log(arrAreEquals([1,2,3],[1,2,3]));
console.log(arrAreEquals([1, 2, 3], [1, 2, 5]));
console.log(arrAreEquals([1,2,3],[4,5,6]));
console.log(arrAreEquals([],[]));