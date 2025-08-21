let readline = require('readline-sync');


//let nome = readline.question("Qual o seu nome? ");
let operacao = readline.question("Qual operacao voce deseja realizar? (soma, subtr, multiplica, divi) ");
let num1, num2; // declaração fora do switch

switch (operacao.toLowerCase())
 {
    case 'soma':
        num1 = parseFloat(readline.question("Digite o primeiro numero: "));
        num2 = parseFloat(readline.question("Digite o segundo numero: "));
        console.log(`Resultado da soma: ${num1 + num2}`);
        break;
    case 'subtr':
        num1 = parseFloat(readline.question("Digite o primeiro numero: "));
        num2 = parseFloat(readline.question("Digite o segundo numero: "));
        console.log(`Resultado da subtração: ${num1 - num2}`);
        break;
    case 'multiplica':
        num1 = parseFloat(readline.question("Digite o primeiro numero: "));
        num2 = parseFloat(readline.question("Digite o segundo numero: "));
        console.log(`Resultado da multiplicação: ${num1 * num2}`);
        break;
    case 'divi':
        num1 = parseFloat(readline.question("Digite o primeiro numero: "));
        num2 = parseFloat(readline.question("Digite o segundo numero: "));
        if (num2 !== 0) {
            console.log(`Resultado da divisão: ${num1 / num2.toFixed(2)}`);
        } else {
            console.log("Erro: Divisão por zero não é permitida.");
        }
        break;
    default:
        console.log("Operação inválida. Por favor, escolha entre soma, subtração, multiplicação ou divisão.");
        break;
}
