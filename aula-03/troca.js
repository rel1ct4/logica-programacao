let dolar, real, valor, moeda, possui

valor = parseFloat(prompt("Digite o valor que deseja trocar!"))
moeda = String(prompt("Digite para qual moeda deseja fazer a troca[Dolar/Real]"))

if(moeda == "Dolar"){
    dolar = valor*0.18
    possui = alert(`Você possui em dólares ${dolar}`)
}else{
    real = valor*5.47
    possui = alert(`Você possui em reais ${real}`)
}
