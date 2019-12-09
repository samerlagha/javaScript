class User {
    constructor(id, name, sessionId) {
        this._id = `${id}`;
        this._name = `${name}`;
        this._sessionId = `${sessionId}`;
    };
};

class UserRepository {
    constructor(arr) {
        this._users = Object.freeze(arr);
    };

    getUserNames() {
        return this._users.map(el => el._name);
    };

    getUserIds() {
        return this._users.map(el => el._id);
    };

    getUserNameById(userId) {
        let findById = this._users.find(el => el._id === userId);
        return findById === undefined ? [] : findById._name;
    };
};

export { User, UserRepository };