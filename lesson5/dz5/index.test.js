import {getSum} from './index';

// arg2 is a number
it('should show desicion function sum',() =>{

const result= getSum(1,6);
expect(result).toEqual(12);

});
 // arg2  is a array
it('should show desicion function sum',() =>{

    const result= getSum(1,[6]);
    expect(result).toEqual(12);
    
    });
  //arg2 is a string 
    it('should show desicion function sum',() =>{

        const result= getSum(1,'6');
        expect(result).toEqual(12);
        
        });
    
