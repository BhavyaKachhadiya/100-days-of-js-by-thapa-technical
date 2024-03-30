// DAY-4

/**
 * The function `checkTriangleType` determines the type of a triangle based on the lengths of its
 * sides.
 * @param a - 2, 5, 5
 * @param b - 4
 * @param c - For the first `console.log` statement, the parameters are:
 * @returns "scalene"  
 * "isoseles"  
 * "equilateral"
 */
const checkTriangleType = (a, b, c) => {
    if (a === b && b===c) return "equilateral";
    if (a ===b|| b === c || a ===c) return "isoseles" 
    return "scalene"
}

console.log(checkTriangleType(2,4,5));
console.log(checkTriangleType(5,4,5));
console.log(checkTriangleType(5,5,5));