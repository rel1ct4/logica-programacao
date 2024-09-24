let primo, conta = 0

do {
    primo = parseInt(prompt("Digite um número"))
    if((primo < 1 )||(primo = "")){
        alert("valor inválido!")
    }
} while ((primo < 1 )||(primo = ""));

for(let i = 1; i <= numero; i++){
    if(primo % 1 === 0){
        conta++
    }
}

if(conta ===2){
    document.write(`${primo} é um númerp primo`)
} else{
    document.write(`${primo}Não é um número primo`)
}

