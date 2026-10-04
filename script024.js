alert("calculo bonificação")

let salario_fixo,valor_vendas, bonus,salario_total

salario_fixo = parseFloat(prompt("qual seu salario fixo ?"))

valor_vendas = parseFloat(prompt("qual valor das vendas efetuadas ?"))

if (valor_vendas > 1500){
    bonus =  valor_vendas - 1500
    salario_total = (1500 * 3/100) + (bonus * 5/100) + salario_fixo
    alert(`o seu salario total junto com seus bonus foi de : ${salario_total}`)
} 

else {
    salario_total = (valor_vendas * 3/100) + salario_fixo
    alert(`o seu salario total junto com seus bonus foi de : ${salario_total}`)
}

location.reload();