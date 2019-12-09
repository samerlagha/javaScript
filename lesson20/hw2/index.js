class User{

    constructor(id,name,sessionId){
        this._id=`${id}`;
        this._name=`${name}`;
        this._sessionId = `${sessionId}`;
    }
}


  class UserRepository{

    constructor(users){
        this._users= Object.freeze(users);
    }

    getUserNames(){
        return this._users.map(elem => elem => elem._name);
    }

    getUserIds(){
        return this._users.map(elem => elem => elem._id);
    }

    getUserNameById(userId){

    let findById = this._users.find(elem => elem._id ===userId);
    return findById === undefined ? [] : findById._name;

    }
}

export{User, UserRepository}