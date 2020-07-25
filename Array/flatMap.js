const escola = [{
    nome: 'Turma 01',
    alunos: [{
        nome: 'Johnny',
        nota: 9.9
    },  {
        nome: 'Bruna',
        nota: 9.8
    }]
}, {
    nome: 'Turma 02',
    alunos: [{
        nome: 'Weliton',
        nota: 9.4
    }, {
        nome: 'Kathleen',
        nota: 9.8
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno);

const notas1 = escola.map(getNotaTurma);
console.log(notas1);

// criando o flatMap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}
const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2);