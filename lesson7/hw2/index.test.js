import {reverseArray} from './index';

//it is not array
it('should get null', function () {
    const result = reverseArray(58);
    expect(result).toEqual(null);
});

// array number 
it('should get reverse', function () {
    const result = reverseArray([3, 2, 1]);
    expect(result).toEqual([1, 2, 3]);
});

// array ['srting']
it('should get reverse ', function () {
    const result = reverseArray(['s', 'a', 'm','e','r']);
    expect(result).toEqual(['r', 'e', 'm','a','s']);
});