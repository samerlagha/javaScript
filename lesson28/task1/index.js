const calc = initValue =>{

    let result = initValue;

    const calculator = {

        add(number){
            result += number;
            return this;
        },
     mult(number){
         result *= number;
         return this;
     },
     subtract(number){
      result -= number;
      return this
     },
     div(number){
         result /=number;
         return this;
     }

    };

    return calculator;
};

const result = calc(3).add(2).mult(4).subtract(5).div(10).result();