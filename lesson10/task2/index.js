const getParsedIntegers = arr => arr
      .map(el=> Number.parseInt(el));

const getParsedIntegersV2 = arr => arr
    .map(el=> parseInt(el));

const getParsedFloats = arr => arr
.map(el=>  Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr
.map(el=> parseFloat(el));