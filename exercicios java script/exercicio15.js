/**
 * 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
 * possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
 * comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
 * que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
 * “Não trabalhamos com este tipo de automóvel aqui”.
 * @author JohnnyCarvalho
 */

function comprarCarro(modelo){
    switch (modelo) {
        case "hatch":
            console.log("** COMPRA EFETUADA COM SUCESSO **");       
            break;
        case "sedan":
        case "motocicleta":
        case "camionete":
            console.log("** TEM CERTEZA QUE NÃO PREFERE ESTE MODELO? **");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    }

}

comprarCarro("hatch");
comprarCarro("sedan");
comprarCarro("motocicleta");
comprarCarro("camionete");
comprarCarro("bicicleta");

console.log("\n#### Testando sortido ####\n");
comprarCarro("sedan");
comprarCarro("hatch");
comprarCarro("bicicleta");
comprarCarro("camionete");
comprarCarro("motocicleta");