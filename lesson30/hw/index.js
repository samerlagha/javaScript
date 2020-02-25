import { addImage } from './addImage.js';

<<<<<<< HEAD

=======
>>>>>>> 0e3494ba587819490d009e026277d39236a22859
 export const addImageV2 = url =>{
    return new Promise((resolve,reject) =>{

     addImage(url,(error,data) =>{
         if(error){
             reject(error);
             return
         } else resolve(data);
     });

    });
};
