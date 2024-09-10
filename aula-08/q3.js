let qtdchincilas, anosFazenda
let totalChincilas = 1

do {
    qtdchincilas = parseInt(prompt("Digite a quantidade de chincilas"))
    if(qtdchincilas < 2 || isNaN(qtdchincilas)){
        alert("Número de chincilas inválido, deve ser maior ou igual a dois")
    }
} while (qtdchincilas < 2 || isNaN(qtdchincilas));

do {
    anosFazenda = parseInt(prompt("Digite quantos anos você planeja criar essas chinchilas"))
    if(anosFazenda < 1 || isNaN(anosFazenda)){
        alert("Para ser considerado válido precisa planejar criar durante pelo menos 2 anos")
    }
} while (anosFazenda < 1 || isNaN(anosFazenda));

document.write(`Quantidade de chincilas: ${qtdchincilas}, tempo de criação: ${anosFazenda}`)

totalChincilas = qtdchincilas

for(let i = 2; i <= anosFazenda; i++){
    totalChincilas =  totalChincilas * 3
    //totalchincilas * = 3 (uma outra forma de fazer de maneira mais curta)
    document.write("<br>" + ` No ano ${i} você tera um total de chincilas de: ${totalChincilas}`)
}