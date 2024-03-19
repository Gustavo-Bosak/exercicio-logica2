// Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

var qq = 0
var soma = 0
var total = 0
var media = 0

while (qq <= 3) {
var num1 = parseInt(prompt("Escreva um número"))
    if (num1 <=10 && num1 >=0) {
        media += num1
        qq++
    } else
    alert("Informe um valor entre 0 e 10")
}

media = media /4
if (media >= 5) {
    alert("Você passou no teste")
} else
    alert("Tente novamente")
