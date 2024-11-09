/**
 * Crie um programa que preencha um vetor com oito números inteiros, calcule e mostre os resultantes. O primeiro vetor resultante deve conter os números positivos; o segundo deve conter os números negativos
 */

let vetor = [], vetor2 = [], vetor3 = [], i = 0

do {

    vetor = [-1, -2, -3, -4, 5, 6, 90, 7]
     if(vetor[i] > 0){
      vetor2[i] = vetor[i]
      
     } else {
       vetor3[i] = vetor[i]
     }
     i++
} while (i < 8);

console.log(`Números totais ${vetor}`)
console.log(`números positivos ${vetor2}`)
console.log(`Números negativos ${vetor3}`)

