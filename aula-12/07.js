/**
 * 7 🟢- Faça um algoritmo que leia um valor de N inteiro e positivo, calcule e mostre o valor de E, conforme a formula a seguir:

`E = 1 + 1/1!  +  1/2!  +  1/3! + … + 1/N!`
 */

let num, E, fatorial 

num = Number(prompt("Digite um número"))

E = 1 
for( let i = 1; i <= num; i++){
   //fatprial = 1 * 1 -- fat = 1 * 2 -- fat = 1 * 3 ...
   fatorial = 1
    for(let j = 1; j <= i; j++ ){
        fatorial = fatorial * j

    }
    E = E + 1/fatorial
}

document.write(`O valor final de E: ${E.toFixed(2)}`)