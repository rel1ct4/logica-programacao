//Função 1
function soma1(){
      
      let numero1, numero2, soma
      numero1 = 5
      numero2 = 5
      soma = numero1 + numero2
      console.log(`${soma}`)
} 
soma1() 
console.log("somando", soma1() + 5)

// Função 2
function soma2(parametro1, parametro2){

      let soma
      soma = parametro1 + parametro2 
      console.log(soma)
}
console.log("------------------ função com parametro e sem retorno-----------------------")
soma2() //NAN
soma2(4) // NAN
soma2(4,4) // 8
soma2(4,4,4,4,4,4,4,4) // 8
console.log(soma2(4,4) + 2) // NAN

console.log("---------------- função com parametro e retorno------------------")

function soma3(param1, param2){
      let soma = param1 + param2
      return soma
}
console.log(soma3(10,10))
console.log(soma3(10,10) + 10)

console.log("teste")

function cadastro(nome, idade, altura){
      if(idade < 18){
            console.log(`${nome} com altura ${altura} não tem permisão`)
      } else{
            console.log(`${nome} comn altura ${altura} tem permissão`)
      }
}
cadastro("carlos", 32, 1.82)
cadastro("wilton", 16, 1.60)

