const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Ana', nota: 9.2, bolsista: true},
    {nome: 'Johnny', nota: 9.8, bolsista: false},
    {nome: 'Bruna', nota: 8.7, bolsista: false}
    // {nome: 'Amanda', nota: 8.2, bolsista: true}
]

console.log(alunos.map(a => a.nota));
const resultado1 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
})

console.log(resultado1);