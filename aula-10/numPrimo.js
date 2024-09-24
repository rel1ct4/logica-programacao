
let numero, contador
do {
    numero =  parseInt(prompt("Digite um número"))
    if(numero <= 0 || isNaN(numero) || numero === ""){
        alert("Digite um número maior que zero e que seja inteiro")
    }
} while (numero <= 0 || isNaN(numero) || numero === ""); // aqui temos a validação dos dados que no caso é de, 
//resposta vazia, not a number e menor que 0

for(let i = 1; i <= numero; i ++){ //essa estrutura repete de 1 até número que o usúario digitou, para dividir
    document.write(`Valor de i: ${numero}%${i} = ${numero%i} <br>`)
    if(numero % i === 0){ // aqui contamos quantos desses números divididos pelo número escolhido tem resto 0
        contador++
    }
}
if (contador === 2) { // ja que número primo so é dividido por 1 e por ele mesmo, se contado for dois então é um número primo.
    document.write(`O número ${numero} digitado pelo usúario é um número primo`)
} else {
    document.write(`O número ${numero} digitado pelo usúario não é um número primo`)
}