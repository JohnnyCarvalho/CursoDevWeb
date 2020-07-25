console.log("Lista usando indice com forEach");
const aprovados = ['Agatha', 'Aline', 'Ana', 'Gabriela', 'Leticia', 'Maria Eduarda'];
aprovados.forEach(function(nome, indice) { // nesse caso o fosEach tem um loop interno que irá percorrer a lista de elemnetos
    console.log(`${indice + 1}) ${nome}`);
})
console.log("Lista usando array com forEach");
const aprovados1 = ['Agatha', 'Aline', 'Ana', 'Gabriela', 'Leticia', 'Maria Eduarda'];
aprovados.forEach(function(nome,indice, array) { // nesse caso o fosEach tem um loop interno que irá percorrer a lista de elemnetos
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})

// também pode ser assim, através de uma arrow function
console.log("\nLista usando arrow function");
aprovados.forEach(nome => console.log(nome));

// outra forma é armazenar essa lista dentor de uma variável passar ela por parâmetro no forEach
console.log("\nLista usando variável");
const listaAprovados = aprovados => console.log(aprovados);
aprovados.forEach(listaAprovados);