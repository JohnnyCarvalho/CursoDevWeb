/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 * @author JohnnyCarvalho
 */

function confereDia(dia) {
    switch (dia) {
        case "segunda":
        case "terça":
        case "quarta":
        case "quinta":
        case "sexta":
            console.log("DIAS UTEIS!");
            break;
        case "sábado":
        case "domingo":
            console.log("DIA NÃO UTIL!");
            break;
        default:
            console.log("*** O DIA NÃO EXISTE ***");
    } 

}

confereDia("segunda");
confereDia("terça");
confereDia("quarta");
confereDia("quinta");
confereDia("sexta");
confereDia("sábado");
confereDia("domingo");
confereDia("Johnny");
console.log("Outro exemplo sortido");
confereDia("sábado");
confereDia("Bruna");
confereDia("segunda");
confereDia("quinta");
confereDia("sexta");
confereDia("terça");
confereDia("domingo");
confereDia("quarta");
console.log("Deu certo");