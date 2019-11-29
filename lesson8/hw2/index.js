function  getAdults(obj){
    let adult = {};
    
     for(let key in obj){
       if(obj[key] >=18){
         adult[key] =obj[key];
       }
     }
      return adult;
      
    }
    
    // const obj= { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
    
    // console.log(getAdults(obj));