/**
 * Mais ultilizado para reaproveitamento de código o Middleware
 * é um framwork de arquitetura de software responsável por reaproveitar códigos
 * se que haja amarração entre eles, ou seja, para reaproveitar uma cadeia de comandos
 * em que 2 ou mais fuções dependem uma da outra para funcionar, com essa ferramenta
 * as fuções ficam o mais livre possivel para que possam ser reemplementadas em 
 * uma outra parte do código
 */

const passo1 = (contexto, next) => {
    contexto.valor1 = 'Middleware 1';
    next();
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'Middleware 2';
    next();
}

const passo3 = contexto => contexto.valor3 = 'Middleware 3';

const executar = (contexto, ...middlewares) => {
    const executarPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](contexto, () => executarPasso(indice + 1))
    }
    executarPasso(0);
}

const contexto = {}
executar(contexto, passo1, passo2, passo3);
console.log(contexto);