const  getFiniteNumbers = arr => arr
        .filter(el=> Number.isFinite(el));

const getFiniteNumbersV2  = arr =>arr
       .filter(el=>  isFinite(el))    ;   

const getNaN = arr => arr
     .filter(el => Number.isNaN(el)) ;

     const getNaNV2 = arr => arr
     .filter(el => isNaN(el)) ;

    const getIntegers = arr =>arr
         .filter(el => Number.isInteger(el));

        const elementList=[4,5.6, '  5.7kl',null,Infinity,undefined];

        console.log(getFiniteNumbers(elementList));