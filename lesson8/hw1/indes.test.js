import {pickProps} from './index';

//array is empty
it('should get {}', () => {
    let result = pickProps({ a: 1, b: 2 }, []);
    expect(result).toEqual({});
});
//fined items
it('should find items in object', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'b']);
    expect(result).toEqual({ a: 1, b: 2 });
});

//not fined items
it('should return properties', () => {
    let result2 = pickProps({ a: 1, b: 2, c: 3 }, ['d', 'e']);
    expect(result2).toEqual({});
});