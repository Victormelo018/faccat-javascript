alert("média aritmetica")

let media 

let nota1 = parseFloat(prompt("qual foi a sua primeira nota ? "))

let nota2 = parseFloat(prompt("qual foi a sua segunda nota ? "))

media = (nota1 + nota2) /2

if (media >=6) {
    alert(`o aluno  foi aprovado com a nota final de ${media}`)
}
else {
    alert(`o aluno  foi reprovado com a nota final de ${media}`)}