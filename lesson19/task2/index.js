export const getOwnProps = obj =>{
       const arrOwnProps=[];
       for(let prop in obj){

        if(obj.hasOwnProprety(prop) && typeof obj[prop!=='function'){
            arrOwnProps.push(prop);
        }
       }

       return arrOwnProps;
}