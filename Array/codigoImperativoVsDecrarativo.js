const alunos = [
    {nome: 'Maria', nota: 10},
    {nome: 'Bruna', nota: 9.5}
]

// Modelo imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Modelo declarativo
const getNota = alunos => alunos.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);