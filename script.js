//const booleando1 = true
//const boolenado2 = false
//const boolenado3 = undefined

//if (condição){
    //se a condicão for true o codigo sera executado

//}

//if(booleando1) {
 //   alert("booleando1 é true")
//} else {
//    alert("booleando1 é false")
//}

//if(booleando1 === boolenado2){
//    alert("B1 e B2 sao iguais")
//} else if (boolenado2 === boolenado3){
 //   alert("B2 é igual a B3")
//} else if (booleando1 === boolenado3){
//    alert("B1 e igual B3")
//} else{
//    alert("nenhuma valor é igual")
//}

//-----------------------------------------------

//let idade = Number(prompt("Digite sua idade: "))
//let = autorizacao = true

//if(idade >=18 && idade < 70){
//    alert("pode votar")
//} else if (idade === 16 || idade === 17) {
//    alert("pode votar com autorizacao")
//}else if (idade >= 70){
//    alert("pode votar, mas nao é obrigatorio")
//    } else {
//        alert("nao pode votar")
//    }

//---------------------------------------------------------

let media = Number(prompt(("Digite a nota do aluno de 0 a 10:  ")))

if(media >= 5 && media <= 10){
    console.log("Aprovado")
} else if ( media >=3 && media <= 10){
console.log("Recuperação")
} else if (media <=2 && media <= 10){
    alert("Estudante reprovado")
} else {
    console.log("Dados invalidos")}
