alert("duração do jogo de xadrez")

let hora_total

let hora_inicio = parseInt(prompt("qual o horario inicio do jogo ?"))

let hora_termino = parseInt(prompt("qual o horario inicio do jogo ?"))

if (hora_termino > hora_inicio) {
    hora_total = hora_termino - hora_inicio
}
else
    hora_total = (24 - hora_inicio) + hora_termino
alert(`a hora total do jogo foi ${hora_total}`)

location.reload();