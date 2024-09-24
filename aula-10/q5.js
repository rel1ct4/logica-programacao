/**Não podemos desistir */
/**Elabore um programa que leia um número N e que indique quantos valores inteiros e positivos devem ser lidos a seguir. Para cada número lido e fatorial desse valor */

let qtdNumero, numeroEscolhido, fatorial

do {
    qtdNumero = parseInt(prompt("Digite quantos número fatorias você deseja saber?"))

    if(qtdNumero<= 0 || isNaN(qtdNumero) || qtdNumero ===""){
        alert("Número inválido")
    }

} while (qtdNumero<= 0 || isNaN(qtdNumero) || qtdNumero ==="");

for(let i = 1; i <= qtdNumero; i++){

    do {
    numeroEscolhido = parseInt(prompt(`Digite o ${i}º número para saber o fatorial`));
    if(numeroEscolhido <= 0 || isNaN(numeroEscolhido) || numeroEscolhido === ""){
        alert("Número inválido");
    }

    } while (numeroEscolhido <= 0 || isNaN(numeroEscolhido) || numeroEscolhido === "");

    fatorial = 1

    for(let j = 1; j <= numeroEscolhido; y++){
    fatorail = fatorial * j

    }
     document.write(`Fatorial de ${numeroEscolhido} é ${fatorial}`)
}



/**
 * for(){

    for(){
        
    }
}
 */