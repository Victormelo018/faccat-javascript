alert("qual numero é o maior ")

let n1,n2,n3

n1 = parseInt(prompt("Digite um numero : "))

n2 = parseInt(prompt("Digite um numero : "))

n3 = parseInt(prompt("Digite um numero : "))

if (n1 > n2  && n1 > n3){
    alert(`O numero maior digitado foi ${n1}`)
}
else if (n2> n1 && n2 > n3){
    alert(`O numero maior digitado foi ${n2}`)
}
else{
    alert(`O numero maior digitado foi ${n3}`)
}