export const createLogger = () => {
    let logger = [];
    return{
        warn: (str) => logger.push(
                    {
                        message: str,
                        dateTime:new Date(),
                        type: "warn",
                    }),
        error: (str) => logger.push(
                    {
                        message: str,
                        dateTime:new Date(),
                        type: "error",
                    }),
        log: (str)=> logger.push(
                    {
                        message: str,
                        dateTime:new Date(),
                        type: "log",
                    }),
        getRecords: (type) => !type ? logger
                .sort((a,b) => a.dateTime > b.dateTime ? 1 : -1)
                .filter(elem => elem = elem.message) :
                logger
                .filter(elem => elem.type === type),

    }
};   
 