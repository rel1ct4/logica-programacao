let tempanual = [];
let mediatemp = 0; acumuladora = 0

for(let i = 0; i < tempanual.length; i++ ){
    tempanual[i] = Number(prompt(`Digite a temperatura do mês ${i + 1}`))
    acumuladora = acumuladora + tempanual[i]
}

mediatemp = acumuladora/tempanual.length
document.write(`<p> Temperatura durante o ano foi de: ${tempanual}</p>`)
document.write(`<p> A média da temperatura anual foi de: ${mediatemp}</p>`)