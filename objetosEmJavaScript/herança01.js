const ferrari = {
    modelo: 'F450 Spider',
    velMax: 340
}
const mercedes = {
    modelo: 'AmgGt',
    velMax: 316
}

console.log(ferrari.__proto__);
/**
 * quando usamos esse método __proto__ ele quer dizer que, se tentar acessar
 * algum atributo de ferrari e por algum motivo não encontrar, para que va indo 
 * de geração em geração, ou seja, vai no pai, se não encontrar, vai no avô e assim
 * sucessivamente, se não encontrar em lugar nenhum, ai sim ele retornara undefined.
 * a palara proto é de protótipo, pois em JS a herança se dá por protótipos e não por 
 * super class como no Java por exemplo.
 */
console.log(ferrari.__proto__ === Object.prototype); // nesse caso ele retornará true
console.log(mercedes.__proto__ === Object.prototype); // nesse caso ele retornará true

function meuObjeto () {}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);