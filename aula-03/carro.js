let modelo, preco, parcela, entrada

modelo = prompt(`Qual o modelo do carro?`)
preco = parseFloat(prompt("Qual o preço do carro?"))

entrada = preco/2
parcela = entrada/12

alert(`A entrada do ${modelo} é de ${entrada} e durante 12 meses você ira pagar ${parcela}`)

