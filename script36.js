// qualquer sistema computacional é composto por 3 grandes partes sendo elas:
/*

1: Entrada de dados
2: Processamento de dados
3: Saída de dados
*/

alert("idades")

let idademan1,idademan2,idadewoman1,idadewoman2,soma,produto

idademan1 = parseInt(prompt("Digite a idade do 1- homem"))

idademan2 = parseInt(prompt("Digite a idade do 2- homem"))

idadewoman1 = parseInt(prompt("Digite a idade da 2- mulher"))

idadewoman2 = parseInt(prompt("Digite a idade da 2 - mulher"))

if (idademan1 > idademan2) {
    if (idadewoman1 > idadewoman2 ){
        soma = idademan1 + idadewoman2

        produto = idademan2 * idadewoman1
        alert(`${produto} ${soma}`)
    }
        else{
            soma = idademan1 + idadewoman1
            produto = idadewoman2 * idademan2
            alert(`${produto} ${soma}`)
        }
    

    }
    else if (idademan1 < idademan2){
        if (idadewoman1 < idadewoman2){
            soma = idademan2 + idadewoman1

            produto = idadewoman2 * idademan1
            alert(`${produto} ${soma}`)
        }
        else{
            soma = idademan2 +idadewoman2

            produto = idadewoman1 * idademan1
            alert(`${produto} ${soma}`)
        }
    }


