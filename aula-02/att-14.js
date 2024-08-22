let salario, nome, vendas, comissao

salario = parseFloat(prompt("Digite o valor do salário fixo"))
nome = (prompt("Digite o nome do vendedor"))
vendas = parseFloat(prompt("Digite a quantidade em reais de vendas desse vendedor"))

comissao = ((15/100)*vendas) + salario

alert(`O salário total de ${nome} foi de: ${comissao}`)

