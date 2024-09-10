let ano, conta, chincilas, acumulador, acumulador2, r

chincilas = prompt("Quantas chincilas tem na sua fazenda?")
ano = prompt("Quantos anos?")
acumulador = ano
acumulador2 = 0

do{
    if(chincilas >= 2 || ano >= 2){
    
        if(acumulador != 0){
            conta =  parseInt(chincilas / 3)
            acumulador =  acumulador - 1 
            acumulador2 = chincilas - acumulador2
            r =  acumulador2
            console.log(`O número de chincilas no ano ${acumulador} é de: ${r}`)
        }
        
    }else{
        console.log("Número inválido, escolha um número de ano e chincilas maior que 2")
        chincilas = ("Quantas chincilas tem na sua fazenda?")
    ano = ("Quantos anos?")
    }
}while(acumulador > 0)