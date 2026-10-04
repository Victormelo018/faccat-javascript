
alert("exercicio 13 - calcular média ponderada")

let nome = prompt("Digite o nome do aluno : ")

let n1 = parseFloat(prompt("digite sua primeira nota : "))

let n2 = parseFloat(prompt("digite sua segunda nota"))

let n3 = parseFloat(prompt("digite sua terceira nota"));

let media = (n1*2 + n2*5 + n3*3)/10;

alert(`A média final do ${nome} foi ${media}`)