const moduloA = require('./moduloA'); // Essa função ./ é responsável por instanciar um módulo
const moduloB = require('./moduloB');

console.log(moduloA.greet);
console.log(moduloA.wellcome);
console.log(moduloA.farewell);

console.log(moduloB.goodMorning);
console.log(moduloB.goodNight());