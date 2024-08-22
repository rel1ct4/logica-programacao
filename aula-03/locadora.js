let titulo, minutos, duracao, horas, min

titulo = prompt("Qual o título do filme?")
minutos = parseFloat(prompt(`Qual foi a duração de ${titulo} em minutos?`))

horas = Math.floor(minutos/60)

min = minutos%60

alert(`${titulo} tem uma duração de ${horas}:${min}h.`)
