// Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

var ano = parseInt(prompt("Em que ano você nasceu?"))

var idade = 2024 - ano

if (idade >= 16){
alert ("Você tem idade para votar")
} else 
    alert("Você não tem idade para votar")
