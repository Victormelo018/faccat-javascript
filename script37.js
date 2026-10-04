//todo sistema operacional é composto por 3 grandes passos sendo eles :
/* 
entradas de dados 
processamento de dados
saidas de dados 
*/
alert("Fruteira")

let maca = 1.80
let morango = 2.50
let quant_maca, quant_morango,totalmaca, totalmorango , total,totalkg

quant_maca = parseFloat(prompt("quantos kg de maça o senhor(a) comprou ? "))

quant_morango  = parseFloat(prompt("quanntos kg de morangos o senhor(a) comprou ? "))

if (quant_maca > 5)  {
    maca = 1.50 
    totalmaca = maca * quant_maca
}
    else  {
  
    totalmaca = maca * quant_maca

}

if (quant_morango > 5) {
    morango = 2.20
    totalmorango = morango * quant_morango
}
else{
    totalmorango = morango * quant_morango
}

total = totalmaca + totalmorango
totalkg = quant_maca + quant_morango

if (total > 25  || totalkg > 8) {
    total = total * 0.90
    alert(`${total.toFixed(2)}`)
}
else{
    alert(`${total.toFixed(2)}`)
}
    
    




