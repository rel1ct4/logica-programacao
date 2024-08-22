let valor1, valor2 

valor1 = parseFloat(prompt("Diga um valor"))
valor2 = parseFloat(prompt("Diga um valor"))

if(valor1 > valor2){
    alert(`O primeiro valor digitado é o maior!`)
} else if(valor1 == valor2){
    alert(`Os valores digitados são iguais em valor!`)
} else{
    alert(`O segundo valor é o maior!`)
}