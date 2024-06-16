const {pi, square} = require('./math');
console.log(pi);
console.log(square(9));

exports.square = square;
exports.pi = pi;