/**
 * 6 🟢- Um funcionário de uma empresa recebe um aumento salarial anualmente. Sabe-se que:

1. Esse funcionário foi contratado em 2005, com o salário inicial de R$1.000,00.
2. Em 2006, ele recebeu um aumento de 1,5% sobre seu salário inicial.
3. A partir de 2007 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior
Faça um algoritmo que determine o salário atual desse funcionário.
 */

let salario, novoSalario, anoAtual, percentual

salario = Number(prompt("Digite o salário!"))
anoAtual = Number(prompt("Digite o ano que estamos autalmente!"))

document.write(`<h3>Salário 2005 : ${salario}</h3>`)
//processamento
percentual = 1.5/100
novoSalario = salario + (percentual * salario)
document.write(`<h3>Salário 2006 : ${novoSalario}</h3>`)

for(let i = 2007; i <= anoAtual; i++ ){
   percentual = percentual * 2
   novoSalario = novoSalario + (percentual * novoSalario)
   document.write(`<h3>Salário ${i}: ${novoSalario.toFixed(2)}</h3>`)
}

document.write(`<h3 class = "sfinal">Salário Final : ${novoSalario.toFixed(2)}</h3>`)