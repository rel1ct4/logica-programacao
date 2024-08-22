let valor

valor = parseFloat(prompt("Me diga um valor positivo ou negativo"))

if(valor > 0){
    alert(`${valor} é um número positivo!`)
}else if(valor == 0){
    alert(`${valor} é um número neutro`)
}else{
    alert(`${valor} é um número negativo`)
}