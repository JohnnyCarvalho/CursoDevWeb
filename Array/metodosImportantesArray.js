const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos);
pilotos.pop() // esse método elimina o último elemento da lista
console.log(pilotos);

pilotos.push('Senna');
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Michael Schumacher') // adiciona um elemento no início da lista
console.log(pilotos);

// método splice para remover e adicionar elementos em array

// adicionar
pilotos.splice(2, 0, 'Valentino Rossi', 'Marque Marquez');
console.log(pilotos);
// remover
pilotos.splice(1, 2);
console.log(pilotos);

// método que retorna um novo array, nesse caso com os dois ultimos elementos do array anterior
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);
// adicionando mais de um elemento

/**
 * nesse caso ele vai pegar o a partir do elemento 1 do array e vai implementar n0o novo array 
 * sem o elemento 4, ou seja, se colocarmos 1, 4 ele vai pegar os elementos 1, 2, 3 e implementar 
 * no novo array, mais o elemento 4 ele não implementa.
 */
const algunsPilotos2 = pilotos.slice(1, 4); 
console.log(algunsPilotos2);

