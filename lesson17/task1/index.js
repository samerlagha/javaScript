 export const user ={
 firstName:'Samer',
 lastName:'Lagha',


 };

 user.getFullName = function getFullName (){
     console.log(`${this.firstName} ${this.lastName}`);
 }

 user.getFullName();
