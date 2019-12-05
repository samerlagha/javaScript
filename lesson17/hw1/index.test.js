import {user} from './index';
it('should enter fullname and get fullname',() =>{

    let set = user.setFullName('Samer Lagha');
    let result = user.getFullName('Samer Lagha');
});
