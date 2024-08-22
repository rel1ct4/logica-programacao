let nota1, nota2, nota3, media

nota1 = parseFloat(prompt("Diga a sua primeira nota[0 á 10]."))
nota2 = parseFloat(prompt("Diga a sua segunda nota[0 á 10]."))
nota3 = parseFloat(prompt("Diga a sua terceira nota[0 á 10]."))

media = Math.floor((nota1 + nota2 + nota3)/3)



if (nota1 || nota2 || nota3 >= 0 && nota1 || nota2 || nota3 <= 10){
 if(media >= 6) {
    alert(`Com seu ${media} você passou de ano!!`)
 } else {
     alert(`Com seu ${media} você passou de ano!!`)
 }
}else{
    alert("O número escrito em alguma das notas ultrapassa o valor recebido[0 á 10]")
}
