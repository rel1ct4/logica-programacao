let c, f

alert('Diga a temperatura e mostrarei em Fahrennheit')
c = parseFloat(prompt('Diga a temperatura'))

f = (c * 9)/ 5 + 32

document.write(`A temperatura em Celsius é: ${c} e transformada em Fahrennheit é: ${f}`)