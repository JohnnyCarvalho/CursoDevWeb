// HERANÇA EM CLASSE

class Avo {
    constructor(nome, sobrenome = 'Carvalho') {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(nome, sobrenome, profissao) {
        super(nome, sobrenome)
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor(nome, sobrenome, faculdade) { 
        super(nome, sobrenome);
        this.faculdade = faculdade;
    }
}

const filho = new Filho();
filho.nome = 'Johnny';
filho.faculdade = 'Direito'
console.log("\nNome: " + filho.nome);
console.log("Sobrenome: " + filho.sobrenome);
console.log("Curso: " + filho.faculdade);

const pai = new Pai();
pai.nome = 'Helio';
pai.profissao = 'Marmorista';
console.log("\nNome do pai: " + pai.nome);
console.log("Sobrenome do pai: " + pai.sobrenome);
console.log("Profissão do pai: " + pai.profissao);

const avo = new Avo();
avo.nome = 'Salustiano';
console.log("\nNome do avô: " + avo.nome);
console.log("Sobrenome do avô: " + avo.sobrenome);