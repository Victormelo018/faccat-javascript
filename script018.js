alert(" teste votação ")

let idade 

let ano_atual = parseInt(prompt("digite o ano que você está "))

let ano_nasc = parseInt(prompt("qual é o ano do seu nascimento ? "))

idade = ano_atual - ano_nasc 

if (idade <16){
    alert("não esta apto a votar ")

}
else if (idade >=16 && idade <18){
    alert("seu voto é opcional")
}

else
    alert ("o seu voto é obrigatório")

location.reload();