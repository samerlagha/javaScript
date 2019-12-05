 function createLogger(){

   let logger=[];

   return {

    warn: function (str) {

        logger.push({
            message: str,
            dataTime: new Date(),
            type:'warn',

        });
    },

    error: function (str) {

        logger.push({
            message: str,
            dataTime: new Date(),
            type:'error',

        });
    },

        log: function (str) {

            logger.push({
                message: str,
                dataTime: new Date(),
                type:'log'
            });
            
        },

        getRecords: function(str) {
            if (!str) {
                return logger;
            };
            return logger.filter(i => i.type === str).sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
        }
    };
};
        
 