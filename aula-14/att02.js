/** 2° Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, um por linha. 
 * 
 */

let vetor = []; contadora = 0 //Declaração de variáveis

for(let i = 0; i < 5; i++){ //Lógica do programa
    vetor[i] = Math.floor(Math.random() * 10)
    contadora  += vetor[i] // O sufixo += é a mesma coisa que utilizar ( contadora = contadora + vetor[i])
    console.log(vetor[i])
}
 
//Mostra dos dados
console.log(vetor)
console.log(`A soma dos números digitados é ${contadora}`)
