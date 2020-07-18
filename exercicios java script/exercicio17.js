/**
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
    * Plano |  Aumento
    * A     |    10%
    * B     |    15%
    * C     |    20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 * @author JohnnyCarvalho
 */

function cauculaAlmento (plano, salarioAtual) {
    switch (plano) {
        case "A":
            console.log("\nO salário atual é R$ "+(salarioAtual).toFixed(2).toString().replace(".", ",")+
            "\nCom aumento de 10% o seu novo salário será: R$ "+(((salarioAtual * 10 / salarioAtual) * 10) +
            salarioAtual).toFixed(2).toString().replace(".", ",")); 
            break;
         case "B":
             console.log("\nO salário atual é: R$ "+(salarioAtual.toFixed(2).toString().replace(".", ",")+
             "\nCom aumento de 15% o seu novo salário será: R$ "+(((salarioAtual * 15 / salarioAtual) * 10) + 
             salarioAtual).toFixed(2).toString().replace(".", ",")));
             break;
         case "C":
             console.log("\nO seu salário atual é : R$ "+(salarioAtual.toFixed(2).toString().replace(".", ",")+
             "\nCom aumento de 20% o seu novo salário será: R$ "+(((salarioAtual * 20 / salarioAtual) * 10)+
             salarioAtual).toFixed(2).toString().replace(".", ".")));
             break;
        default:
            console.log("\n*** O PLANO É INVÁLIDO ***");
            break;
    }

}

cauculaAlmento("A", 1000);
cauculaAlmento("B", 1000);
cauculaAlmento("C", 1000);
cauculaAlmento("D", 1000);

console.log("\n*** TESTANDO SORTIDOS ***");

cauculaAlmento("A", 2000);
cauculaAlmento("B", 3000);
cauculaAlmento("C", 4000);
cauculaAlmento("D", 5000);
