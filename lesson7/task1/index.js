const getSepecialNumbers= numbers => 
    numbers.filter(num=>  num % 3 ===0) ;
    const arr = [1,2,3,4,5,6,7,8,9];
     console.log(getSepecialNumbers(arr));