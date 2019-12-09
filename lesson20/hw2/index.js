class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
}

class UserRepository {
    constructor(arr) {
        this._users = Object.freeze(arr);
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