// console.log(global);

// se por ventura precisarmos cria algo para visualização no escopo global é so seguirmos como exemplo abaixo
global.MinhaApp = Object.freeze ({
    saudacoes() {
        return 'Estou no escopo global';
    },
    nome: 'Testando ...'
})