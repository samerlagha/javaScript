import {add,decrease,reset,getMemo} from './index.js'

it('should function add correct', () => {

    let count = add(5);
    expect(count).toEqual(5);
});

it('should function decrease working correct',()=>{

    let count = decrease(10);
    expect(count).toEqual(-5);
});

it('should function reset correct',() =>{

    let cont =reset();
    expect(count).toEqual(0);
});

it('should function getMemo correct', () =>{
    let count = getMemo();
    expect(count).toEqual(0);
});