let a, b, t

alert("Digite dois valores e irei trocar eles!")

a = parseFloat(prompt("Digite um valor"))
b = parseFloat(prompt("Digite um valor"))

document.write("O valor de A: " + a + " O valor de B: " + b + "<br>")

temp = a 
a = b
b = temp

document.write("O valor de A: " + a + " O valor de B: " + b + "<br>")

