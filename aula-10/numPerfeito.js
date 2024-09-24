/** Não podemos desistir */
/**Elabore um progrma que leia um número e verifique se ele é ou não  perfeito. 
 * Um número perfeito é aquele que é igual a soma deos seus divisores inteiros(exceto o próprio número). */

let numero, contador = 0
// 6 -> 6/1 = 0, 6/2 = 0, 6/3 = 0, 6/4 = N, 6/5 = N, 6/6 = 0

do {
    numero =  parseInt(prompt("Digite um número"))
    if(numero <= 0 || isNaN(numero) || numero === ""){ /** validação de dados com estrutura de repetição */
        alert("Digite um número maior que zero e que seja inteiro")
    }
} while (numero <= 0 || isNaN(numero) || numero === "");

/** A lógica inteira da atividade ta ai dentro desse "For" */
for(let i = 1; i < numero; i ++){ //Criamos a variavel e colocamos que so pode passar para a contadora se o resto for da divisão for igual a 0
    if(numero % i === 0){ 
        contador = contador + i // Aqui vamos acumular os valores dos divisores que deram 0
    }
}

if(contador === numero){ // para que aqui validemos o resultado ja que um número perfeito so é pefeito se a soma dos divisoresfor igual a ele mesmo
    document.write("O numero é perfeito")
}else{
    document.write("O número não e um número perfeito")
}