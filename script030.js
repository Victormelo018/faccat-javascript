alert("crescente")

let n1,n2,n3

n1 = parseInt(prompt("Digite um numero : "))

n2 = parseInt(prompt("Digite um numero : "))

n3 = parseInt(prompt("Digite um numero : "))

if (n1 < n2 ){
    if (n3 < n1){
        alert(`${n3} ${n1} ${n2}`)
    }

  else if
   ( n3 < n2){
    alert(` a sequencia é ${n1} ${n3} ${n2}`)}
    
    else{
       
       alert(` a sequencia é ${n1} ${n2} ${n3}`)
    }
}

else {
    
        if (n3 < n2){
            alert(`a sequencia é ${n3} ${n2} ${n1}`)
        }
        else if
        (n3 < n1){
            alert(`a sequencia é ${n2} ${n3} ${n1}`)
        }
        else{
             alert(`a sequencia é ${n2} ${n1} ${n3}`)
        }
    }

location.reload()