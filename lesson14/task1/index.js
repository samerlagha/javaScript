'use strick'
const message='Just learn it!';
export function sendMessage(name) {
    const sender ='Gromcode';
    console.log(`${name}, ${message}. You ${sender}`);
}

 export  function setMassage(text){
    message = text;
 }