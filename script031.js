alert("forma um triangulo ?")

let lado1,lado2,lado3

lado1 = parseInt(prompt("Digite um numero : "))

lado2 = parseInt(prompt("Digite um numero : "))

lado3 = parseInt(prompt("Digite um numero : "))

if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado2 + lado1 )){
     

    alert(`é um triangulo`)
}
else
{
    alert(" Não é um triangulo")
}