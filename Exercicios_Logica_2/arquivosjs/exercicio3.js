// Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

var num1 = parseInt(prompt("Escreva um número"))
var num2 = parseInt(prompt("Escreva outro número"))
var num3 = parseInt(prompt("Escreva mais outro número"))

if (num1 > num2 && num1 > num3) {
    document.write ("o maior valor é " + num1)
} else if (num2 > num1 && num2 > num3) {
    document.write ("o maior valor é " + num2)
} else
    document.write ("o maior valor é " + num3)
