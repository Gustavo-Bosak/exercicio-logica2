// Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas: (62.1 * h) - 44.7 para pessoas do sexo feminino e (72.7 * h) - 58 para pessoas do sexo masculino.

sexo = 0
while (sexo <= 0 || sexo >= 3) {
var altura = parseFloat(prompt("Informe sua altura (em metros)"))
sexo = parseInt(prompt("Informe seu sexo (1 para feminino e 2 para masculino)"))

switch (sexo) {
    case 1:
        var peso = (62.1 * altura) - 44.7
        alert ("o seu peso ideal é " + peso)
        break
    case 2:
        var peso = (72.7 * altura) - 58
        alert ("o seu peso ideal é " + peso)
        break
    default:
        alert("escolha apenas uma das opções")
}
}
