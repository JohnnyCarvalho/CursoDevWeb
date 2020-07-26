const contadorA = require('./instanciaUnica'); // recebe oque está dentro do pacote instanciaUnica
const contadorB = require('./instanciaUnica');
const contadorC = require('./instanciaUnica');

const contadorD = require('./instanciaNova')(); // recebe oque está dentro do pacote instanciaNova
const contadorE = require('./instanciaNova')();

/**
 * o valor original é 1 lá no pacote instanciaUnica, mais como incrementamos 2 vezes ele 
 * recebe aqui o valor 3 e assim imprime o mesmo na tela
 */
contadorA.inc();
contadorB.inc();
console.log("Incrementação do valor A e B: ", contadorB.valor);

contadorC.divide(10, 2);
console.log("Divide valor C: ", contadorC.valorDivide);



/**
 * o valor original é 1 lá no pacote instanciaNova, mais como incrementamos 2 vezes ele 
 * recebe aqui o valor 3 e assim imprime o mesmo na tela
 */
contadorD.inc()
contadorD.inc();
console.log("Incrementação do valor D 2 vezes: ", contadorD.valor);

// nesse ponto chamamos uma função que multiplica que se encontra dentro do pacote instanciaNova
contadorE.multiplica(2, 4);
console.log("Multiplicação do valor E: ", contadorE.valorMultiplica);

