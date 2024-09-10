let primo, i

do {
    do {
        primo = parseInt(prompt("Digite um número"))
        if(primo % 2 === 0 || isNaN){
            alert(`${primo} é um número primo`)
        }else{
            alert(`${primo} não é um número primo`)
        }
    } while ( primo % 2 === 0 || isNaN);
 
    i = prompt("Digite 1 para continuar e 0 para sair")
} while (i = 1);
