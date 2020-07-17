/**
 * 10) Crie uma função que verifica se um número inteiro passado como 
 * parêmetro é divisível por 3 e retorne true ou false.
 * @author JohnnyCarvalho
 */

function verificaNumero(numero) {
    if (numero % 3 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(verificaNumero(30));
console.log(verificaNumero(20));
console.log(verificaNumero(10));
console.log(verificaNumero(6));