/**
 * Vamos fazer o cauculo de uma circunferência para entendermos 
 * um pouco sobre a biblioteca math
 */
const raio = 5.6;
/**
 * nesse caso o Math.PI pucha da biblioteca Math o número de PI que é iuma constante, 
 * e o Math.pow pucha a função de potência da biblioteca Math para fazer o cauculo, nesse caso a potência 
 * é representada pelo pow que significa power em inglês.
 */
const area = Math.PI * Math.pow(raio, 2);

console.log(area); // aqui imprime o raio da circunferência
console.log(typeof Math); // no caso o Math é um objeto