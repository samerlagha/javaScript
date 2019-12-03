import { increaser } from './index.js';

// arg1 and arge is a number
it(' should function return arg1 + arg2', () => {
    const ifMore = increaser(10, 5);
    expect(ifMore).toEqual(15);
});

// result if arg1 or arg2 is a string
it(' should function return arg1 + arg2', () => {
    const ifFew = increaser(10, '5');
    expect(ifFew).toEqual('105');
});


// result any arg  is empty
it(' should function return arg1 + arg2', () => {
    const ifFew = increaser(10,  );
    expect(ifFew).toEqual(10);
});