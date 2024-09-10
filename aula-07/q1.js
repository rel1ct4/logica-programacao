let valor, pergunta, conta

 prompt("O progama continuara até que seja informado[não]")

do{
    valor = prompt("Me informe um valor, se o número for par mostrarei o dobro, se for ímpar mostrarei o triplo")
    pergunta = String(prompt("Deseja continuar[sim/não]"))
    
    if(isNaN(valor)){
        console.log("Valor inválido")
    }else{
        if(valor%2 == 0){
            conta = valor * 2 
            console.log(`O dobro de ${valor} é ${conta}`)
    
        }else {
            conta = valor * 3
            console.log(`O dobro de ${valor} é ${conta}`)
        }
    }
}while(pergunta = "não")

console.log("Fim do programa")