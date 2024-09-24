let numero, divisores = 0

numero = parseInt(prompt("Digite um número"))

for (let i = 1; i <= numero; i++){
    if(numero % i === 0 ){
        divisores = divisores + 1 
    }
}

if(divisores === 2){
    document.write(`É um número perfeito`)
}else {
    document.write(`Não é um número perfeito`)
}