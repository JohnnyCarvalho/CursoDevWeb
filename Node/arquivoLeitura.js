const fs = require('fs')

const caminho = __dirname + "/arquivo.json"

// sincrono
const conteudo = fs.readFileSync(caminho, "utf-8")
//console.log(conteudo);

// assincrona
fs.readFileSync(caminho, "utf-8", (err, conteudo) => {
    const configuration = JSON.parse(conteudo)
    console.log(`${configuration.db.host}:${configuration.db.port}`);
    console.log(configuration.db.host, configuration.db.port);
})

// forma mais simples
const config = require('./arquivo.json')
console.log(config.db);
console.log(config.db.port);

// lendo todos os arquivos da pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
    console.log("Quantidade de elementos na pasta: ", arquivos.length);
    console.log("Arquivo na posição 2 da lista: ", arquivos[2]);
    console.log("Quantidade de elementos dentro do arquivo na posição 2 da lista: ", arquivos[2].length);
})