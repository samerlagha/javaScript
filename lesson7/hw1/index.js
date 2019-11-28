
const squareArray = array => {
    if (!Array.isArray(array)) return null;
    return array.map(number => number * number);
}
const arr = [2,3,4] ;
 console.log(squareArray(arr));