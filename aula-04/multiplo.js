let valor

valor = parseInt(prompt("Digite um valor"))

if( (valor%3 == 0) && (valor%5 == 0)){
    alert("O valor é multiplo de 3 e 5")
}else{
    alert("O valor não é multiplo de 3 e 5")
}