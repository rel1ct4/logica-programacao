//variáveis contadoras - variável++(adiciona de 1 em 1), variável--(subtrai de 1 em 1)
// variáveis acumuladoras - variavel = variavel + 1 ( variável mais ela mesma mais um número)
// as duas se iniciam com o valor "0"

let nomeConta, valorConta, i
let qtdconta = 0, valorFinal = 0

while(i != 0){

    do {
        nomeConta = prompt("Digite o nome da conta")
        if(nomeConta === ""){
            alert("A conta precisa de um nome, digite novamente!;")
        }
    } while (nomeConta === "");
    do {
        valorConta = parseInt(prompt(`Digite o valor da conta de ${nomeConta}: `))
        if(valorConta === 0 || isNaN(valorConta)){
            alert("O valor da conta precisa ser um número")
        }
    } while(valorConta === 0 || isNaN(valorConta))
    
    qtdconta++
    valorFinal = valorFinal + valorConta
    document.write(`<h4>${nomeConta} \t\t -------- \t\t ${valorConta}</h4>`)
    i = parseInt(prompt("Digite 1 para continuar cadastrado e 0 para sair"))

}
document.write(`<h3>Quantidade de contas: ${qtdconta}------${valorFinal}</h3>`)


