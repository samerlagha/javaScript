class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get sessionId(){
        return this._sessionId;
    }
}

class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }

    get users(){
        return this._users;
    }

    getUserNames() {
        return this._users
           .map(el => el._name);
    }

    getUserIds() {
        return this._users 
          .map(el => el._id);
    }

    getUserNameById(userId) {

        return this._users
        .filter(el => el._id === userId)
            .map(el => el._name)[0];
    }
}

export { User, UserRepository };