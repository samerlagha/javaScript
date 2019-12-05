import { user } from './index.js'

it('should return full name', () => {
    let result = user.getFullName();
    expect(result).toEqual('Samer Lagha');
});