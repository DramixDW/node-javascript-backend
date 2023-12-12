const util = require('util');

console.log(util.types.isDate(new Date()));
console.log(util.types.isDate(123));
console.log(util.format("%s a %d années aujourd'hui", "Romain", 4));
console.log(util.isDeepStrictEqual({
    a: 2,
}, {
    a: 2,
}))
console.log({ a: 2 } === { a : 2 })