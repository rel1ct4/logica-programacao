let salarioinicial, salario
const aumento = 25

salarioinicial = parseInt(prompt("Digite o valor do salário"))

salario = ((aumento/100)*salarioinicial) + salarioinicial

alert("O salário final foi de: " + salario)