let nume

nume = Number(prompt("Digite um número"))

document.write(`<h2>O ${nume} será apresentado em ordem decrescente</h2>`)

for(let i = nume; i >= 1; i --){
   
    document.write(`${i} <br>`)
    
}