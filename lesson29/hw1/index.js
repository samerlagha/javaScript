export const requestUserData =(userId , callback) =>{

    if(userId == 'broken'){
        callback(null,'Failed to load user data');
        return ;
    }

    let obj ={
        name:'John',
        age : '17',
        userId ,
        email: 'userid777@example.com',
    };

    callback =obj;
    setTimeout(callback, Math.floor(Math.random()*3 +1) *1000);
};