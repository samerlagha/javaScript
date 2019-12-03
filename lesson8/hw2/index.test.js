import {getAdults} from './index';

// object not empty
it('Sorted object by age', () => {
    let result = getAdults({ 'Makc': 37, 'Karim': 7, 'Alex': 35 });
    expect(result).toEqual({ 'Makc': 37, 'Alex': 35 });
});

//all perssons age less then 18 
it('empty object', () => {
    let result = getAdults({ 'Rim': 6, 'Maher': 5, 'Chaza': 8 });
    expect(result).toEqual({});
});

//object empty
it('Should get {}', () => {
    let result = getAdults('');
    expect(result).toEqual({});
});