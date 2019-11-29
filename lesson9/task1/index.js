const getAdults= userObj =>{
    const userArray = Object.entries(userObj);
    const filteredUserArray = userArray
         .filter(user => user[1] >=18);
         const usersNames= filteredUserArray 
            .map(user => user[0]);
            return usersNames;
}

const user= { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
console.log(getAdults(user));