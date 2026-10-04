alert("soma dos dois maiores")

let n1,n2,n3,resultado

n1 = parseInt(prompt("Digite um numero : "))

n2 = parseInt(prompt("Digite um numero : "))

n3 = parseInt(prompt("Digite um numero : "))

if (n1 > n3 && n2 > n3){
    resultado = n1 + n2
    alert(`a soma dos dois maiores ficou ${resultado}`)
}
else if 
(n3 > n2 && n1 > n2){
    resultado = n3 + n1
    alert(`a soma dos dois maiores ficou ${resultado}`)
}
else{
    resultado = n3 + n2
    alert(`a soma dos dois maiores ficou ${resultado}`)
}