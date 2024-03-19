// Uma micro calculadora. Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação). O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 
//Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações

var valor1 = parseInt(prompt("Informe um valor"));
var valor2 = parseInt(prompt("Informe mais um valor"));
operation = 1

while (operation >= 1 || operation <= 4) {
    var operation = parseInt(prompt("Escolha uma operação matemática, sendo 1 = Adição, 2 = Subtração, 3 = Divisão, 4 = Multiplicação"))

    switch(operation) {
        case 1:
            var resul = valor1 + valor2
            alert("O resultado dessa adição é " + resul)
            break
        case 2:
            var resul = valor1 - valor2
            alert("O resultado dessa subtração é " + resul)
            break
        case 3:
            var resul = valor1 / valor2
            alert("O resultado dessa divisão é " + resul)
            break
        case 4:
            var resul = valor1 * valor2
            alert("O resultado dessa multiplicação é " + resul)
            break
        default:
            alert("Por favor escolha somente entre as 4 operações")
    }
}
