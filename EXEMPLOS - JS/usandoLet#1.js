/**
 * Usando o let ao ives de var o problema encontrado anteriormente não
 * acontece, vamos ver alguns exemplos
 */
var numero = 1;
{
    let numero = 2
    console.log("Dentro do bloco: "+numero);
}
console.log("Fora do bloco: "+numero);