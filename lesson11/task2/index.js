const sortContacts =(contacts,boolen) =>{
    
    if(!Array.isArray(contacts)){
        return null;
    }

    const result= contacts 
      .sort((a,b) => {
          if(boolen ===true || boolen ===undefined){

            return b.name.localeCompare(a.name);
          } else {
         return b.name.localeCompare(a.name);
          }
      
       } ) ;
       return result;
};