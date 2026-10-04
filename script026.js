
alert("estoque")

let quant_estoque,quant_maxima,quant_minima,quant_media

quant_estoque = parseInt(prompt("quantos há no estoque atualmente ? "))

quant_maxima = parseInt(prompt("qual  é a quantidade máxima ? "))

quant_minima = parseInt(prompt("qual a quantidade minima em estoque do produto ? "))

quant_media = (quant_maxima + quant_minima)/2

if (quant_estoque >= quant_media) {
    alert(`Não efetuar compra voce possui em estoque : ${quant_estoque} a média do produto é ${quant_media}`)
}
else{
    alert(`Efetuar a compra : ${quant_estoque} a média do produto é ${quant_media}`)
}
location.reload()