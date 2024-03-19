// Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

var num1 = parseInt(prompt("Escreva um número"))
var num2 = parseInt(prompt("Escreva outro número"))
var num3 = parseInt(prompt("Escreva outro número"))
var soma = 0

if (num1 < num2 && num1 < num3) {
    soma = num2 + num3
    document.write("a soma dos dois maiores valores é " + soma)
} else if (num2 < num1 && num2 < num3) {
    soma = num1 + num3
    document.write("a soma dos dois maiores valores é " + soma)
} else if (num3 < num1 && num3 < num2) {
    soma = num1 + num2
    document.write("a soma dos dois maiores valores é " + soma)
} else
    document.write("não é possível somar todos os valores")
