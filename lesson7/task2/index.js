const sortDesc = numbers =>{
    const copy = numbers.slice();   
     return copy.sort((a,b) => b - a );;
};

const arr= [2,1,6,3,9,8,19,11];
console.log(sortDesc(arr));