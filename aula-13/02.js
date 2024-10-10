/**
 * 2) Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, um por linha. 
 */

//declaração 
let n; numero = [], acumuladora = 0

//entrada de dados
do {
    n = Number(prompt(`Digite quantos números ira ter`))
    if(n = "" || isNaN(n) || n < 0){
        alert(`Número inválido`)
    }
} while (n = "" || isNaN(n) || n < 0);

for(let i = 0; i < (n -1); i++){
    numero[i] = Number(prompt(`Digite o número ${n}`))
    acumuladora = acumuladora + numero[i]
}

//saída de dados
for(let y = 0; y < n; y++){
    document.write(`O número ${y + 1} que o usuário digitou foi: ${numero[i]}`)
}
    document.write(`A soma dos ${n} números é: ${acumuladora}`)





