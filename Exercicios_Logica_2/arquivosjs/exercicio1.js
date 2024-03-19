// Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

var num1 = parseInt(prompt("Escreva um número"))
var num2 = parseInt(prompt("Escreva mais um número"))

if (num1 < num2) {
    document.write ("o maior valor é " + num2)
} else if (num2 < num1) {
    document.write ("o maior valor é " + num1)
} else
    document.write ("Esses números são iguais")
