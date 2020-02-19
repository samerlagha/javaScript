export const shmoment  = initValue=>{

    let result = initValue;

    const calculator = {
    
        add(time,value) {
         let objTimes ={

        milliseconds : value => result.setMilliseconds(result.getMilliseconds() + value) ,

        seconds : value => result.setSeconds(result.getSeconds() +  value),
        minutes : value => result.setMinutes(result.getMinutes() + value),
        hours: (value) => result.setHours(result.getHours() + value),
        days: (value) => result.setDate(result.getDate() + value),
        months: (value) => result.setMonth(result.getMonth() + value),
        years: (value) => result.setFullYear(result.getFullYear() + value),

         }

         result= new Date(objTimes[time](value));
         return this;

        },
        subtract(time, value) {
            let objTimes = {
                milliseconds: (value) => result.setMilliseconds(result.getMilliseconds() - value),
                seconds: (value) => result.setSeconds(result.getSeconds() - value),
                minutes: (value) => result.setMinutes(result.getMinutes() - value),
                hours: (value) => result.setHours(result.getHours() - value),
                days: (value) => result.setDate(result.getDate() - value),
                months: (value) => result.setMonth(result.getMonth() - value),
                years: (value) => result.setFullYear(result.getFullYear() - value),
            }
            result = new Date(objTimes[time](value));
            return this;
        },

        result() {
            return new Date(result);
        },
    };

    return this;
};