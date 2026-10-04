// no pensamento computacional existe uma sequencia de operaçoes sendo elas :
/*
entrada de dados:
processamento de dados: 
saida de dados :
*/
alert("código usuario")

let user,senha

user =parseInt(prompt("Digite o seu usuario : "))

if (user === 1234){
    senha = parseInt(prompt("Qual é a sua senha : "))
    if (senha === 9999){
        alert(`Acesso permitido`)
    }
    else{
         alert(`Senha incorreta`)
    }


}
else{
    alert(`Usuario não existente`)
}