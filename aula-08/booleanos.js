    //verdadeio e falso if(booleano) while(booleano)
    let isAtivo = false
    console.log(isAtivo)// printa false

    isAtivo = true
    console.log(isAtivo)//printa true

    isAtivo = 1
    console.log(!isAtivo)//printa false, pois o "!" é uma negação

    isAtivo = 1
    console.log(!!isAtivo)//printa true, pois o "!!" é uma negação da negação

    console.log("Todos os verdadeiros")
    console.log(!!1)
    console.log(!!-3)
    console.log(!!" ")// escara como verdadeiro pois o espaço entre as aspas é considerado conteudo
    console.log(!!infinity)
    console.log(!!(isAtivo = true))

    console.log("Todos os falsos")
    console.log(!!0)
    console.log(!!"")// sem o espaço ele considera falso pois"não tem conteudo"
    console.log(!!null)
    console.log(!!NaN)
    console.log(undefined)
    console.log(!!(isAtivo = false))