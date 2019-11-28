const flatArry = arr => arr.reduce((acc,elem) => {
          return acc.concat(elem);
     },[]);
    
const initArray= [1,2,[3,5],[6]];
console.log(flatArry(initArray));