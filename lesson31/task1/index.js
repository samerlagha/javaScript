const requestUserData = userId =>{
 
    const request = new Promise((resolve,reject) =>{

        if(userId ==='broken'){
            setTimeout(()=>{
                reject(new Error('User not found'));
            },500)
          
        } else {
            setTimeout(()=>{

              resolve({
                  name:'Jhon',
                  age:17,
                  email:`${userId}`,
                  userId,
              });
            },1000);
         
        }
    });
    return request;

};


requestUserData('broken-1')
.then(data=>console.log(data) , error => console.log(error))
  //.catch(error => console.log(error))
  .finally(() =>console.log('finally'));
