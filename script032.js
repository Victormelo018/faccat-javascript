alert("Partida placar")

let time1,time2,goltime1,goltime2

time1 = prompt("digite o nome do time 1")

time2 = prompt("digite o nome do time 2")

goltime1 = parseInt(prompt(`quantos gols o time ${time1} fez ? `))

goltime2 = parseInt(prompt(`quantos gols o time ${time2} fez ? `))

if (goltime1 > goltime2){
    alert(`O time ${time1} Foi o vencedor, com o placar de ${goltime1} x ${goltime2}`)
}
else if (goltime1 === goltime2){
    alert(`O jogo deu empate entre ${time1} e ${time2} com o placar de ${goltime1} x ${goltime2}`)
}
else {
    alert(`O time ${time2} Foi o vencedor, com o placar de ${goltime2} x ${goltime1}`)
}

location.reload()