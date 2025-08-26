//https://meet.google.com/xos-jfxb-wvo?pli=1

// // cls

console.log('\n---------------------Tarefa 1--------------');
let times = ["Vasco", "Flamengo", "Fortaleza", "Corinthians"];

console.log("Primeiro time:", times[0]);
console.log("Último time:", times[times.length - 1]);

console.log('\n---------------------Tarefa 2--------------');
let minhaListaTarefa = [];

minhaListaTarefa.push("Comprar pão");
minhaListaTarefa.push("Estudar JavaScript");
minhaListaTarefa.push("Fazer exercícios");

console.log(`minhaListaTarefa = ${minhaListaTarefa}`);
console.log('\n---------------------Tarefa Extra--------------');
 let animais = ["Cachorro", "Gato", "Elefante", "Leão", "Girafa"];

console.log("Array de animais:", animais);

// // Percorrendo o array e imprimindo cada animal pelo índice usando for
for (let i = 0; i < animais.length; i++) {
    console.log(`Animal na posição: ${i}: ${animais[i]}`);
 }

console.log('\n---------------------Fim--------------');


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número par: ${numeros[i]}`);
    }
}
console.log('\n---------------------Fim--------------');



