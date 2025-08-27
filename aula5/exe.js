let nome = require('readline-sync').question('Qual é o seu nome? ')
let ano = require('readline-sync').questionInt('Qual é o seu ano de nascimento? ')
let anoAtual = new Date().getFullYear()

let idade = anoAtual - ano
console.log(`Olá ${nome}, você tem ${idade} anos.`)

if (idade >= 18) {
    console.log(`Olá ${nome}, você é maior de idade!`)
} else {
    console.log(`Olá ${nome}, você é menor de idade!`)
}