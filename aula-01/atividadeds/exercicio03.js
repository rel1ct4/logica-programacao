let  resultadoS, resultadoSub, resultadoMult, valor1, valor2

alert('Digite dois valores e mostrarei o resultado')
valor1 = parseInt(prompt('digite um valor'))
valor2 = parseInt(prompt('digite um valor'))

resultadoS = (valor1 + valor2)
resultadoSub = (valor1 - valor2)
resultadoMult = (valor1 * valor2)

document.write('O resultado da soma é: ' + resultadoS+"<br>")
document.write('O resultado da subtração é: ' + resultadoSub + "<br>")
document.write('O resultado da multiplicação é: ' + resultadoMult + "<br")
