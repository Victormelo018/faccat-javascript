alert("calculo horas extras")

let horas_trabalhadas, salario_hora, salario_total, horas_extra,valor_horas_extra 

horas_trabalhadas = parseInt(prompt("quantas horas voce trabalhou esse mês ?"))

salario_hora = parseInt(prompt("quanto é o valor da sua hora ?"))



if (horas_trabalhadas > 160) {
 horas_extra = horas_trabalhadas - 160
 valor_horas_extra = (salario_hora * 1.5)* horas_extra

 salario_total = (salario_hora * 160 ) + valor_horas_extra

 alert(` o valor total do seu salario nesse mês foi : ${salario_total}`)

}

else{
    salario_total = salario_hora * horas_trabalhadas
alert(` o valor do seu salario esse mês foi de : ${salario_total}`)
}

location.reload()