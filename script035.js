
    alert("desconto gasolina")

let tipo,litroA,litroG,descontoA,descontoG,totalA,totalG,calculoA,calculoG

tipo = prompt("qual combustivel você deseja usar ? A- alcool ou G- gasolina ? ")



if (tipo === "A"){

    litroA = parseFloat(prompt("quantos litros deseja por ?"))


    if (litroA > 20){
        totalA =  (litroA  * 2.90)
        descontoA = (totalA * (5/100))
        calculoA = totalA - descontoA
        alert(`o valor fica ${calculoA}`)
        }
        else{
           totalA =  (litroA  * 2.90)
        descontoA = (totalA * (3/100))
        calculoA = totalA - descontoA 
        alert(`o valor fica ${calculoA}`)
        }

    }
   else if  (tipo === "G"){

    litroG = parseFloat(prompt("quantos litros deseja por ?"))


    if (litroG > 20){
        totalG =  (litroG  * 3.30)
        descontoG = (totalG * (6/100))
        calculoG = totalG - descontoG
        alert(`o valor fica ${calculoG}`)
        }
        else{
           totalG =  (litroG  * 3.30)
        descontoG = (totalG * (4/100))
        calculoG = totalG - descontoG 
        alert(`o valor fica ${calculoG}`)
        }

    }