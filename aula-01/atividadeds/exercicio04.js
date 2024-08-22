let consumoMedio, distancia, combustivel

distancia = parseInt(prompt('digite a distancia'))
combustivel = parseInt(prompt('digite o total de combustivel gasto'))

consumoMedio = distancia / combustivel

document.write(' O consumo médio de combustivel é: ' + consumoMedio)