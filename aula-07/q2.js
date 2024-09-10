let conta, conatador, fonte, c , r

document.write("Esse sistema ira registrar suas contas e somar elas no fim")
document.write("O sistema continuara a perguntar até que o usuário responda[não]")

do{
    if(conta > 0){
        conta = prompt("Diga o valor dessa conta")
        c = prompt("Diga de onde veio essa conta")
        r = prompt("Deseja calcular o total das contas se sim, responda[SIM] ")
        conatador = conatador + conta
        console.log(`${c} = ${conta}`) 
        fonte = prompt("Deseja continuar[sim/não]")
        if(r == "SIM"){
            console.log(`O total das contas foi igual a: ${conatador}`)
        }
        
        
    } else{
        console.log("Esse valor não é um número!")
        conta = prompt("Diga o valor dessa conta")
    }
}while(fonte = "sim")