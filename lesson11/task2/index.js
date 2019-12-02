const sortContacts =(contacts,boolen) =>{
    
    if(!Array.isArray(contacts)){
        return null;
    }

    const result= contacts 
      .sort((a,b) => {
          if(boolen ===true || boolen ===undefined){

            return a.name.localeCompare(b.name);
          } else {
         return a.name.localeCompare(b.name);
          }
      
       } ) ;
       return result;
}