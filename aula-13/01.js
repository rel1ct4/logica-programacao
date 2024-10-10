/**1) Dada uma sequência de n números, imprimi-la na ordem inversa à da leitura. */

let n; numeros = []

do {
    n = Number(prompt(`Digite a quantidade de números`));
    if(n = "" || isNaN(n) || n < 0){
        alert("Número inválido")
    }
} while (n = "" || isNaN(n) || n < 0);

for(let i = 0; i < n; i++){
    numeros[i] = Number(prompt(`Digite o número ${i + 1} da lista`))
}

do {
    n = n - 1
    document.write(`Em ordem decrescente é: ${numeros[n]} <br>`)
} while (n >= 1);
   

