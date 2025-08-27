let readline = require ('readline-sync')

let nome = readline.question('Qual é o seu nome? ')
console.log(`"oi" ${nome}`)

let numero = 2
let fruta = 'banana'

if(numero >= 2 || fruta == 'banana'){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}