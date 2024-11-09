/**
 * 3° Crie um programa que solicite a entrada de 10 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 5. Exiba os valores dos dois vetores na tela, simultaneamente, em duas colunas (um em cada coluna), uma posição por linha.
 */

let vetor = [], vetor2 = [], contadora = 0

for(let i = 0; i < 10; i++){ //Lógica do programa
    vetor[i] = Math.floor(Math.random() * 10) //comando para gerar os números aleátoriamente
    contadora  += vetor[i] // O sufixo += é a mesma coisa que utilizar ( contadora = contadora + vetor[i])
    console.log(`O valor do usuário é ${vetor[i]}`)

    vetor2[i] = vetor[i] * 5 //vetor que pega os valores do primeiro e multiplica por 5
    console.log(`o valor do usuário multiplicado por 5 é ${vetor2[i]}`)
}