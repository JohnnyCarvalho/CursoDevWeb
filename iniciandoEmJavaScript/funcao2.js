// armazenar uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b);
}
imprimirSoma(2, 10);

// armazena uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(10, 10));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 5));