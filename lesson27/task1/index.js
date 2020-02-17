localStorage.clear();
localStorage.setItem('hobbies',JSON.stringify({name: 'Tom'}));
localStorage.setItem('name',JSON.stringify('Tom'));
localStorage.setItem('age',JSON.stringify(17));
// console.log(JSON.parse(localStorage.getItem('hobbies')));

const getLocalStorageData  = () =>{
//  for(let i =0; i <localStorage.length; i++){

//     localStorage.key(i);
//  }
// Object.keys(localStorage);
// Object.values(localStorage);
return Object.entries(localStorage)
.reduce((acc,[key , value]) =>{
   let newValue;
    try {
         newValue =JSON.parse(value);
    } catch (error) {
         newValue=value;
    }
    return {
       
        ...acc,
        [key]:newValue,

    };
} ,{});
};

console.log(getLocalStorageData());