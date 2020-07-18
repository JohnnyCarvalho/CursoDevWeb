/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 * @author JohnnyCarvalho
 */

function fatorial(valor) {
    // para valores negativos
    if(valor<0) {

      return 'Valor deve ser maior ou igual a zero';
    
      // para valor = 0  ou igual a 1
    } else if ( (valor == 0) || (valor == 1) ) {

      return 1;
     
    } else {

      var acumula = 1;
      for(x = valor; x > 1; x--) {
        acumula = acumula * x;
      }
      return acumula;
    } 

}

console.log(fatorial(-1));
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(10));


 