//casting -> processo de converter os tipos de dados de uma variável.

/**dois tipos de casting
 * parseInt() -> converter para inteiro
 * parseFloat() -> converter para flutuante
 */

/**para resolver um algoritmo eu tenho que seguir 3 passos:
 * 1° determinar os dados de entrada (variáveis e comando para receber valores)
 * 
 */


let nota, nota1, nota2 
nota1 = parseInt(prompt('digite sua nota'))
nota2 = parseInt(prompt('digite sua nota'))

//2° processamento -> trabalhar com as variáveis
nota = nota1 + nota2

//3° saída do processamento. Saída de dados 
//comandos de saida de dados
console.log(nota) //mostra no console
document.write(nota) //mostra no navegador
document.write('---------->') 
document.write(typeof nota) 