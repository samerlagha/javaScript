function getSum(numbers){

    let sumOfNumbers=0;
    if(!Array.isArray(numbers)) {
      return null;
    }
    for(let i=0 ; i< numbers.length;i++){
  
      console.log(numbers[i]);
      sumOfNumbers +=numbers[i];
    }
     return sumOfNumbers;    
  }