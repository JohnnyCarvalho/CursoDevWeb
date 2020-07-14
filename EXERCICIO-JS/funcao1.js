// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

/**
 * você pode passar menos ou mais parãmetros que não trava o código, 
 * ele simplismente vai ignorar os que faltam ou sobram, vejamos os exemplos abaixo
 */
imprimirSoma(10, 20); 
imprimirSoma(50); // aqui vai imprimir NaN
imprimirSoma(10, 10, 2, 5, 40); // aqui vai imprimir a soma somente dos dois primeiros valoras, nesse caso 10 + 10 = 20
imprimirSoma(); // aqui vai imprimir NaN

// função que retorna um valor
function soma(a, b = 1){
    return a + b;
}
console.log(soma(2,3));
console.log(soma(2));
console.log();

