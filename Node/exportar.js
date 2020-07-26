console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null; // mesmo mudando o exportos ele continuará retornando oque lhe foi passado acima
console.log(module.exports);

// por isso sempre que formos exportar algo, obrigatóriamente temos que usar o comando module.exports