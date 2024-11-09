/**Dada uma sequência de n números, imprimi-la na ordem inversa à da leitura. */

const vetor = []

for (let i = 0; i < 5; i++) {

    vetor[i] = Math.floor(Math.random() * 10)
    console.log(vetor[i])
}

for (let i = vetor.length; i >= 0; i--) {
    
   console.log( vetor[i])
}