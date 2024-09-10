let repeti, v

repeti = parseInt(prompt("Digite um número!"))

alert("Mostrarei seu njúmero na ordem decrescente")

do{
    if(repeti > 0 ){
        v = repeti - 1
        console.log(repeti)
    }else{
        alert("Número inválido")
        repeti = parseInt(prompt("Digite um número!"))
    }
} while(repeti > 0)

