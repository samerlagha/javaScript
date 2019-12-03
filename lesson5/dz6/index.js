const  getPrimes = num =>{
   

    nextPrime:
    for (let i = 1; i <= num; i++) { 
    
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }
         console.log(i);
    }
    
  
    }




 