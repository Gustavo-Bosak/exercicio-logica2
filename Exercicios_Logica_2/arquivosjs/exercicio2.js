// Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

var num1 = parseInt(prompt("Escreva um número"))

if (num1 < 0 ) {
    document.write ("Esse número é negativo")
} else if (num1 > 0) {
    document.write ("Esse número é positivo")
} else
    document.write ("Esse número é 0")
    