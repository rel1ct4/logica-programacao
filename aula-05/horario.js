let h, h2, h3

h = parseInt(prompt("Digite a hora no Brasil[0 á 24]"))

h2 = h + 5

if((h1 > 0) && (h1 < 23)){
    if(h2 > 23){
        h3 = h2 - 24
        alert(`A hora na frança é ${h3}, do dia seguinte`)
    }else{
        alert(`A hora na frança é ${h2}`)
    }
}else{
    alert(`O número digitado ${h1} é considerado inválido escreva um número entre 0 e 24`)
}