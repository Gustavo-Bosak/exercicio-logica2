// Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes).

var num1 = parseInt(prompt("Escreva um número"))
var num2 = parseInt(prompt("Escreva outro número"))
var num3 = parseInt(prompt("Escreva outro número"))
var num4 = parseInt(prompt("Escreva outro número"))

if (num1 > num2 && num1 > num3 && num1 > num4) {
    var maior = num1
} else if (num2 > num1 && num2 > num3 && num2 > num4) {
    var maior = num2
} else if (num3 > num1 && num3 > num2 && num3 > num4) {
    var maior = num3
} else
    var maior = num4

alert("o primeiro valor é " + num1 + " o último valor é " + num4 + " e o maior deles é " + maior)
