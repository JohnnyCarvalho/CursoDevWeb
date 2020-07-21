/**
 * Agora vamos ver alguns exemplos de como implementas o metodo bolean em java script
 * em outras linguagens de programação o boolean aceita somente true or false, em java script 
 * é aceitável tanto o true or false como também números e etc...
 * vejamos alguns exemplos
 */
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

/**
 * Para testarmos se um valor é verdadeiro ou falso podemos usar números 
 * po exemplo, digamos que vc pergunta para o usuário se ele deseja cadastrar
 * alguma coisa e da-lhe a opçõa de digitar 1 para sim e 2 para não
 * exemplo:
 */
console.log("Deseja cadastrar algum produto? \nDigite [1] para sim e [2] para não: ")
isAtivo = 1;
console.log(!!isAtivo)
// ou
console.log(!isAtivo)

/**
 * alguns exemplos que servem para verdadeiros e falços
 */
console.log("*** Verdadeiros ***")
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("*** falsos ***");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("*** para finalizar ***");
console.log(!!('' || null || 0 || ' '));

let nome = 'Johnny';
console.log(nome || 'Desconhecido');


