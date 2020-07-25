/**
 * Nesse exercício vamos implementar um método chamado forEach2, ou seja
 * nós vamos criar um por que ele não existe
 */

Array.prototype.forEach2 = function(callback){ // aqui estamos criando o forEach2
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


console.log("Lista usando indice com forEach");
const aprovados = ['Agatha', 'Aline', 'Ana', 'Gabriela', 'Leticia', 'Maria Eduarda'];
aprovados.forEach2(function(nome, indice) { // nesse caso o fosEach2 tem um loop interno que irá percorrer a lista de elemnetos
    console.log(`${indice + 1}) ${nome}`);
})

// agora vamos testar com array para ver se está igual oao forEach original do JS
console.log("Lista usando indice com forEach");
const aprovados1 = ['Agatha', 'Aline', 'Ana', 'Gabriela', 'Leticia', 'Maria Eduarda'];
aprovados.forEach2(function(nome, indice, array) { // nesse caso o fosEach2 tem um loop interno que irá percorrer a lista de elemnetos
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})
