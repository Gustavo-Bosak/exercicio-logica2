// Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

var num1 = parseInt(prompt("Escreva um número"))
var num2 = parseInt(prompt("Escreva mais um número"))
var num3 = parseInt(prompt("Escreva mais um número"))
var num4 = parseInt(prompt("Escreva mais um número"))
var num5 = parseInt(prompt("Escreva mais um número"))
var num6 = parseInt(prompt("Escreva mais um número"))

var media = (num1 + num2 + num3 + num4 + num5 + num6)/6

document.write ("a média dos valores " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + " e " + num6 + " é " + media)
