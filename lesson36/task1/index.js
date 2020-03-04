export const fetchUser  =  async userId =>{
    //proverka erro fo async
    try{

           //zapros data dla polutshenie data from server
        const response =  await fetch(`https://api.github.com/users/${userId}`);
        //proverka 
          if(!response.ok){
              return null;
          }
           //esli user find
    const userDate = await response.json() ;
    return userDate;

    } catch(err){
        throw new Error('Failed to fetch user');
    }

  
};

getUser('facebook')
.then(userDate =>console.log(userDate))
   .catch(err=>alert(err.message));