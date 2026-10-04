alert("calculo compra de maças")

let preco,valor_tot

let num_macas = parseInt (prompt("quantas maças você comprou ? "))

if (num_macas>=12){
    preco = 1.00
    valor_tot = (num_macas * preco) 

    alert(`o numero de maças comprada foi de ${num_macas} e o preço foi de: ${valor_tot}`)
}
else{
    preco = 1.30
    valor_tot = (num_macas * preco) 

    alert(`o numero de maças comprada foi de ${num_macas} e o preço foi de: ${valor_tot}`)
}