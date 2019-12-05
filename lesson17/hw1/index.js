  export const user ={

    firstName:'',
    lastName:'',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(fullName){
        let result = fullName.split(' ');
        this.firstName = result[0];
        this.lastName =result[1];
    },
 };