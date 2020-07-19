/**
 * 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
 *  
 * 1) crianças com menos de 10 anos pagam R$80; 
 * 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
 * 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
 * 4) conveniados acima de 60 anos pagam R$130
 * 
 * @author JohnnyCarvalho
 */

let valorPlano = 0;
 function verificaPlano (idade) {
     if (idade < 10) {
         valorPlano = 80.00;
         return "O valor a ser pago é: R$ "+(100+valorPlano).toFixed(2).toString().replace(".", ",");
     }
     else if (idade >10 && idade <=30) {
         valorPlano = 50.00;
         return "O valor a ser pago é: R$ "+(100+valorPlano).toFixed(2).toString().replace(".", ",");
     }
     else if (idade >30 && idade <=60) {
         valorPlano = 95.00;
         return "O valor a ser pago é: R$ "+(100+valorPlano).toFixed(2).toString().replace(".", ",");
     }
     else if (idade >60) {
         valorPlano = 130.00;
         return "O valor a ser pago é: R$ "+(100+valorPlano).toFixed(2).toString().replace(".", ",");
     }


 }
console.log(verificaPlano(15));
console.log(verificaPlano(9));
console.log(verificaPlano(35));
console.log(verificaPlano(65));
