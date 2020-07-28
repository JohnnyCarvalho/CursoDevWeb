/**
 * Nesse projeto vamos persistir um arquivo em formato json, porém o mesmo terá que ser convertido para
 * formato textual, nesse exemplo vamos criar um objeto e transforma-lo em testo para gravar no disco
 * para isso vamos usar o comando "JSON.stringify"
 */


const fs = require('fs');

const produto = {
    nome: 'celular',
    preco: 2500.00,
    desconto: 20
}
                                            //// ********************* ////
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { //nesse ponto o arquivo é escrito através do comando "fs.writeFile" elido através do "JSON.stringify"
    console.log(err || 'Arquivo salvo com sucesso!'); // nesse ponto fizemos uma espécie de teste lógigo que se a variável for falso vai retornar o err se não vai retornar o texto
})

