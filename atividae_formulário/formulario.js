// process.stdout.write("\uFEFF");
// process.stdout.setEncoding("utf8");

console.log("<-------------Formulario de Informações do Usuário------------------------------->");

const readline = require('readline-sync');

// Perguntas do formulário
let nome = readline.question("Digite seu nome: ");

let dia = parseInt(readline.question("Dia de nascimento: "));
let mes = parseInt(readline.question("Mes de nascimento: "));
let ano = parseInt(readline.question("Ano de nascimento: "));

let telefone = readline.question("Digite seu numero de telefone: ");

let temAnimal = readline.question("Voce tem animal em casa? (sim/nao): ").toLowerCase();

let qtdAnimais = 0;
if (temAnimal === "sim") {
  qtdAnimais = parseInt(readline.question("Quantos animais voce tem? "));
}

// --- Verificando se é maior de idade ---
let hoje = new Date();
let anoAtual = hoje.getFullYear();
let mesAtual = hoje.getMonth() + 1;
let diaAtual = hoje.getDate();

let idade = anoAtual - ano;

// // Ajuste se a pessoa ainda não fez aniversário no ano
// if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
//   idade--;
// }

let maiorIdade = idade >= 18 ? "Sim" : "Nao";

// --- Resultado ---
console.log("\n===== FORMULÁRIO =====");
console.log(`Nome: ${nome}`);
console.log(`Data de nascimento: ${dia}/${mes}/${ano}`);
console.log(`Idade: ${idade} Anos`);
console.log(`${nome} Você é maior de idade.`);
console.log(`Telefone: ${telefone}`);
console.log(`Tem animal em casa: ${temAnimal}`);
console.log(`Quantidade de animais: ${qtdAnimais}`);
console.log('Obrigado pela colaboração,  FIM DO PROGRAMA...');
console.log("<---------------------------------------------------------------------------------->");


