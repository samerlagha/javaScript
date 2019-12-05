import {createArrayOfFunctions} from './index';
it ('should return index', () => {

    // number not null
    const result = createArrayOfFunctions(9)[5]();
    expect(result).toEqual(5);

 // argument not passed
    const resultOfEmpty = createArrayOfFunctions();
    expect(resultOfEmpty).toEqual([]);
  //not a number
    const resulNull = createArrayOfFunctions("string");
    expect(resulNull).toEqual(null);
});