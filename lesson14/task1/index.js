'use strick'
const message='Just learn it!';
let sender ='Gromcode';
export function sendMessage(name) {
    
    console.log(`${name}, ${message}. You ${sender}`);
}

 export  function setMassage(text){
    message = text;
 }