const vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10]

/**Relembrando alguns conceitos
 *  1- Leia o array mostre os números positivos
 *  2- leia o array mostre os números negativos
 *  3- leia o array o array verifique se o no array existe o número 6 e qual a posição em que ele está
 * 
 */

//início da 1° questão
const vetor2 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10]


for(let i = 0; i < vetor2.length; i++){
  if(i > 0){
    console.log(`Valor ${vetor2[i]} é positivo`)
  }

}

//Fim da 1° questão

//Início da 2° questão
const vetor3 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10]

for(let i = 0; i < vetor3.length; i++){
    if(i < 0){
      console.log(`Valor ${vetor3[i]} é negativo`)
    }
  
  }

//Fim da 2° questão

//início da 3° questão
const vetor4 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10]

for(let i = 0; i < vetor4.length; i++){

    if(vetor[i] === 6){
        console.log(`Existe o valor 6 e sua posição no array é ${i}º`)
    }
}

//Fim da 3° questão
  