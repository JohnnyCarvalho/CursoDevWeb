/**
 * 19) O cardápio de uma lanchonete é o seguinte:
 * 
 * Código   |  Descrição do Produto      |   Preço
 * 100      |  Cachorro Quente           |  R$ 3,00 
 * 200      | Hambúrguer Simples         |  R$ 4,00
 * 300      | Cheeseburguer              |  R$ 5,50 
 * 400      | Bauru                      |  R$ 7,50     
 * 500      | Refrigerante               |  R$ 3,50 
 * 600      | Suco                       |  R$ 2,80
 * -----------------------------------------------------
 * 
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente.
 * @author JohnnyCarvalho
 */

function pedido (codigo, quantidade) {
    switch (codigo) {
        case 100:
            let valorDog = 3.00;
            console.log("\n"+quantidade+" cachorro quente\nValor a pagar: R$ "+
            (valorDog * quantidade).toFixed(2).toString().replace(".", ","));
            break;
        case 200:
            let valorHamburger = 4.00;
            console.log("\n"+quantidade+" Hambúrguer Simples \nValor a pagar: R$ "+
            (valorHamburger * quantidade).toFixed(2).toString().replace(".", ","));
            break;
        case 300:
            let valorCheseburger = 5.50;
            console.log("\n"+quantidade+" Cheeseburguer\nValor a pagar: R$ "+
            (valorCheseburger * quantidade).toFixed(2).toString().replace(".", ","));
            break;
        case 400:
            let valorBauru = 7.50;
            console.log("\n"+quantidade+" Bauru\nValor a pagar: R$ "+
            (valorBauru * quantidade).toFixed(2).toString().replace(".", ","));
            break;
        case 500:
            let valorRefri = 3.50;
            console.log("\n"+quantidade+" Refrigerante\nValor a pagar: R$ "+
            (valorRefri * quantidade).toFixed(2).toString().replace(".", ","));
            break;
        case 600:
            let valorSuco = 2.80;
            console.log("\n"+quantidade+" Suco\nValor a pagar: R$ "+
            (valorSuco * quantidade).toFixed(2).toString().replace(".", ","));
            break;
        default:
            console.log("\n*** ESSE PRODUTO NÃO EXISTE EM NOSSO CARDÁPIO ***");
            break;
    }
}
pedido(100, 2);
pedido(200, 2);
pedido(300, 2);
pedido(400, 2);
pedido(500, 2);
pedido(600, 2);
pedido(700, 2);