let valor1, valor2, valor3

valor1 = parseInt(prompt("Digite um valor, para o lado 1"))
valor2 = parseInt(prompt("Digite um valor, para o lado 2"))
valor3 = parseInt(prompt("Digite um valor, para o lado 3"))



if((valor1 + valor2 > valor3) && (valor1 + valor3 > valor2) && (valor2 + valor3 > valor1)){
    alert("É um triângulo válido.")
}else{
    alert(" Nao é um triângulo válido")
}

