// Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.

var qq = 0
var soma = 0
var total = 0

while (qq <= 5) {
var num1 = parseInt(prompt("Escreva um número"))
    if (num1 < 72) {
        soma += num1
        qq++
        total = total + num1 + ", "
    } else
    alert("Informe um valor menor que 72")
}

alert("A soma entre os valores " + total + " é " + soma)
