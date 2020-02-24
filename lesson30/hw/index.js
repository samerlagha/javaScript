import { addImage } from './addImage.js';


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