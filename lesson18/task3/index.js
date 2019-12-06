export const sumOfSquares = function() {
   
    return [...arguments].reduce((acc,elem)=>{
        return (acc+elem)*(acc+elem);
    },0);
};

console.log(sumOfSquares(1,2,3,4));