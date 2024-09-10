//break = finaliza o programa
//continue = refaz o teste lógico
for(let i = 1; i<=10; i++){
    if(i === 5 || i === 8){
        continue
    }
    if( i === 7 ){
        break
    }
    console.log("i = " + i) 
}