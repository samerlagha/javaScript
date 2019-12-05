import { createLogger } from './index.js'

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warn('q');
    let result = logger.getRecords('warn')[0].type;
    expect(result).toEqual('warn');
});

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warn('q');
    let result = logger.getRecords('warn')[0].message;
    expect(result).toEqual('q');
});

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warn('q');
    let result = logger.getRecords('log');
    expect(result).toEqual([]);
});

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warn('q');
    logger.log('l');
    let result = logger.getRecords('error');
    expect(result).toEqual([]);
});