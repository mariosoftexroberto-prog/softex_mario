let readline = require ('readline-sync')


let nome = readline.question("Qual é o seu nome? ");


switch(nome){
    case 'ivo':
        console.log("o seu nome é Ivo");
        break;
    case 'Ivo':
        console.log("Eu to paqui");
        break;
    case 'IVO':
        console.log("EU TO AQUI");
        break;
    default:
        console.log("Não conheço");
        break;
}