alert("Digite 0 para sair do programa")
let numero;

do{
    numero = parseInt(prompt("Digite um número"))
    if(numero === 0 || isNaN(numero)){
        //confirmar a saída
        let sair = prompt("Cofirmar saída")
        if(sair){
            break
        }else{
            continue
        }
    }
    if(numero % 2 === 0){
        alert(`O dobro do ${numero} é ${numero * 2}`)
    }else{
        alert(`O triplo do ${numero} é ${numero * 3}`)
    }
    alert("Digite 0 para sair")
    //continuar a lógica do software( par = dobro, ímpar = triplo)

}while(true)