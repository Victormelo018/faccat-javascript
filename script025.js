alert("SALDO")

let numero_conta, saldo, debito, credito,saldo_atual

numero_conta= parseInt(prompt("qual é o numero da sua conta ? "))

saldo= parseInt(prompt("qual é o valor do saldo ? "))

debito= parseInt(prompt("qual é o valor do débito ? "))

credito= parseInt(prompt("qual é o valor do seu crédito ? "))

saldo_atual = saldo - debito + credito

if (saldo_atual >=0) {
    alert(`Saldo positivo seu saldo atual é ${saldo_atual}`)
    }
    else{
        alert(`Saldo negativo seu saldo atual é ${saldo_atual}`)
    }

    location.reload();