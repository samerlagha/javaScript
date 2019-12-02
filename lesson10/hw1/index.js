const getTotalPrice = arr =>{

    let sum=0;

    sum = arr.reduce((accumulator, currentValue) => {
        return accumulator +=currentValue; 
              });
  
    // for(let i=0 ; i < arr.length; i++){
    //     sum += arr[i];
    // }
    //  const res = Math.floor(sum*100)/100;
  
   return '$'+ Math.floor(sum*100)/100;
  
  };