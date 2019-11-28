const squareArray =  arr =>arr.filter(el => Number.isInteger(el)).map(el => Math.pow(el, 2));
const arr = [2,3,4] ;
 console.log(squareArray(arr));