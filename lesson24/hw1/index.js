// Try edit message

const secondPerMinute= 60 ;
const secondPerHour= 60 * secondPerMinute;
const secondPerDay = 24 * secondPerHour;

 const getDiff = (startDate, endDate) =>{

   let DiffTime = startDate - endDate;

   let second = (parseInt(DiffTime / 1000));

   let days = Math.trunc(second /secondPerDay);

   let secondInLastDay = second - days * secondPerDay;

   let hour = (parseInt(secondInLastDay / secondPerHour));

   let secondInLastHour = secondInLastDay - hour * secondPerHour;

   let minut = (parseInt(secondInLastHour / secondPerMinute));
   let sec = secondInLastHour - minut * secondPerMinute;
   return `${Math.abs(days)}d ${Math.abs(hour)}h ${Math.abs(minut)}m ${Math.abs(sec)}s`
   
};
