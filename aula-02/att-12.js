let valorproduto, valorfinal, acrescimo

valorproduto = parseInt(prompt("Digite o valor do produto"))
acrescimo = parseFloat(prompt("Digite o valor do acrésimo"))

valorfinal = ((acrescimo/100)*valorproduto) + valorproduto

aler("O valor final do produto foi de: " + valorfinal)