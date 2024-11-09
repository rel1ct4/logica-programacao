/** 4° Faça um programa que preencha dois vetores com dez elementos numéricos cada um e mostre um vetor resultante da intercalação deles. */

let vetor = [1, 3, 5, 7, 9], vetor2 = [2, 4, 6, 8, 10], vetor3 = [] //Objetivo é fazer o terceiro vetor mostrar[1, 2, 3, ...]
let cont1 = 0, cont2 = 1, i = 0

do {
    vetor3[cont1] = vetor[i]
    vetor3[cont2] = vetor2[i]

    cont1 = cont1 + 2
    cont2 = cont2 + 2
    i++
} while (i <= 4);
console.log(vetor3)