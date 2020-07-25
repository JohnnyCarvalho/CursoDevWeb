// implementar um sistema reduce que percorre uma lista e retorna se os alunos nela inseridos são bolsistas ou não

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Ana', nota: 9.2, bolsista: true},
    {nome: 'Johnny', nota: 9.8, bolsista: false},
    {nome: 'Bruna', nota: 8.7, bolsista: false}
]

// Desafio 01: Todos os alunos são bolsistas?
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista));

//Desafio 02: Algun aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));