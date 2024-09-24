let nome, sexo
let salario = 0, pecas = 0, i = 0, Msalario = 0
let totalPecas = 0, totalPagamento = 0, mediaM = 0, mediaF = 0, homens = 0, mulheres = 0, m1 = 0, m2 = 0

    for(i = 2; i > 0; i--){

        do {
            nome = prompt("Qual o nome do funcionário?")
            if(Number(nome) || nome == ""){
                alert("Valor inválido")
            }
        } while (Number(nome) || nome == "");
        
        do {
            sexo = prompt(`Digite o sexo do(a) ${nome} (feminino ou masculino)`)
            if(Number(sexo) || sexo == ""){
                alert("Valor inválido")
            }
        } while (Number(sexo) || sexo == "");
        
        do {
            pecas = parseInt(prompt(`Quantas peças ${nome} fez durante esse mês?`))
            if(isNaN(pecas)){
                alert("Número inválido, por favor digite um número inteiro!")}
    
                totalPecas = totalPecas + pecas
        
                if(pecas <= 20){
                    salario = 1412
        
                } else if((pecas > 20) || (pecas <= 30)){
                    salario = 1412 + (4.2 *(pecas - 20))
                    
                } else if(pecas > 30){
                    salario = 1412 + (7.0*(pecas - 30))
                }
                if(sexo == "feminino"){
                    mediaF = mediaF + pecas
                    homens = homens+1 
                } else if(sexo == "masculino"){
                    mediaM = mediaM + pecas
                    mulheres = mulheres+ 1
                }
                 m1 = mediaF/pecas
                 m2 = mediaM/pecas
                totalPagamento = totalPagamento + salario
            
        } while (isNaN(pecas));
        document.write(`<h4>${nome}: R$ ${salario}</h4>`)
        
    }

    document.write(`<h3> Produzimos um total de peças de: ${totalPecas}</h3>`)
        document.write(`<h3> O total gasto em salário no mês foi de: ${totalPagamento}</h3>`)
        document.write(`<h3> O total de peças produzidas por mulheres no mês foi de: ${mediaF}</h3>`)
        document.write(`<h3> A média de peças produzidas por mulheres no mês foi de: ${m1}</h3>`)
        document.write(`<h3> O total de peças produzidos por homens no mês foi de: ${mediaM}</h3>`)
        document.write(`<h3> A media de peças produzidas por mulheres no mês foi de: ${m2}</h3>`)




