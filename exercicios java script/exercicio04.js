/**
 * 04) Crie uma função que irá receber dois valores, 
 * o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 * @author johnnyCarvalho
 */
function divEmod(dividendo, divisor){
    console.log("O resultado da divisão é: "+(dividendo / divisor).toFixed(2)); // manipulas as casas decimais
    console.log("O resto da divisão é: "+(dividendo % divisor));
}
divEmod(10, 2);
divEmod(10, 3);