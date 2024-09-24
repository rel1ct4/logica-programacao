//declaração das variáveis
let num_operario, pecas_operario, num_maior, cont_m, cont_f, tot_pecas, cont, media_m, media_f, salario_maior, salario_op, total_folha, sexo_op;

//inicialização das que trabalham com repetição, para evitar erros
tot_folha = 0, tot_pecas = 0, media_m = 0, media_f = 0, cont_f = 0, cont_m = 0;


for(cont = 1; cont <= 1; cont++){
    do {
        num_operario = +prompt("Digite o número" + cont + "º operário");
        if(num_operario <= 0 || isNaN(num_operario)){
            alert("Número de operário inválido");

        }
    } while (num_operario <=0 || isNaN(num_operario));

    do {
        sexo_op = prompt("Digite o sex do operário(M ou F)").toUpperCase
        if(sexo_op != "M" || sexo_op != "F"){
            alert("Sexo de operário inválido")
        }
    } while (sexo_op != "M" || sexo_op != "F");

    do {
        pecas_operario = +prompt("Digite o total de peças fabricadas pelo " + cont + "º operário" );
        if(pecas_operario <= 0 || isNaN(pecas_operario)){
            alert("Número inválido")
        }
    } while (pecas_operario <= 0 || isNaN(pecas_operario));

    if(pecas_operario <= 20){
        console.log(salario_op);

    } else if(pecas_operario > 20 && pecas_operario < 30){
        salario_op = salario_op + (pecas_operario - 20) * (3/100) * salario_op

    } else if(pecas_operario >= 30){
        salario_op = salario_op + (pecas_operario - 20) * (3/100) * salario_op + (pecas_operario - 30) * (5/100) * salario_op
    } 

    console.log("O operário de número " + num_operario + " recebe o salário : " + salario_op); 

    tot_folha = tot_folha + salario_op
    tot_pecas =  tot_pecas + pecas_operario
       console.log(tot_folha)
       console.log(tot_pecas)

    if(sexo_op === "M" || sexo_op === "m"){
        media_m = media_m + pecas_operario
        console.log(media_m)
        cont_m = cont_m + 1
    }

    else if(sexo_op === "F" || sexo_op === "f"){
        media_f = media_f + pecas_operario
        console.log(media_f)
        cont_f = cont_f + 1
    }

    if(cont === 1){
        salario_maior = salario_op
        num_maior = num_operario
    } else{
        if(salario_op > salario_maior){
            salario_maior =  salario_op
            num_maior =  num_operario;
        }
    }

}


