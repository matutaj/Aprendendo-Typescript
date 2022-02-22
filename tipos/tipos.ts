//tipos de dados no typescript

//string
let meunome:string = 'ashuashuashu'
console.log(meunome)


//numbers
let numero:number = 23
console.log(numero)

let idade:number=12.8
console.log(idade)

//booleano

let  valor:boolean = false
console.log(valor)
let minhaIdade:any
minhaIdade = 9
console.log(typeof minhaIdade)

//array´s
let ruas= ['bairro do 6', 'Capalanga', 'Bairro do PAG']
console.log(typeof ruas[0])

//tuplas
let array:[string, number, string]= ['atd', 0, '']

array =['matuta', 12,'melh']
console.log(array)

//enums
//é muito usado para indicar dias da semana, mês ou ainda ...

enum cor{
    verde,
    vermelho, 
    amarelo,
    laranja= "a melhor cor"
}

let minhaCor: cor = cor.amarelo

console.log(minhaCor)
console.log(cor.laranja)

//any
let carro: any = 'Jorge'
console.log(carro)
carro = {
    nome: 'Russ',
    sobrenome:'jorge',
    idade:23
}
console.log(`${carro.nome} e o sobre nome ${carro.sobrenome}, e tem a idade de ${carro.idade}`)

//funções

function returnmeunome():string{
    return meunome
}
console.log(returnmeunome())

function multiplicar(numeroA:number, numeroB:number):number{
    return numeroA * numeroB
}
//tipos functions

let calculo: (numA:number, numB:number) => number

calculo= multiplicar
console.log(calculo(2,5))

//obejtos
let object:{nome:string, idade:number} ={
    nome: 'DLine', 
    idade: 54
}
console.log(object)

object={
    idade:78,
    nome:'Code',
}
console.log(object)

//desafios
//minha solução 

let funcionarios ={
    nomes:['Ernesto Salias', 'Lúcio José', 'Matuta Jorge'],
}

let horas= (h:number):string =>{
let horario = h<= 8? 'ponto normal':'fora do horário'
return horario;
}
console.log(horas(9))

//solução do professor, mas ainda acrescentei a minha lógica para reduzir a mlinha de

//criando types para reutizar um código, ao invés de criar um 
// outro código

type Funcionario={
    noms:string[],
    horarion: (ha:number)=>string
}

let funcionario:Funcionario={
    noms:['Mário Varela', 'Osvaldo de Sousa'],
    horarion: (hr:number):string =>{
        let resultante = hr <= 8? 'ponto normal':'fora do horário'
        return resultante
    }
}
console.log(`${funcionario.noms}, ${funcionario.horarion(5)}`)

let funcionario2:Funcionario={
    noms:['Mário1 Varela', 'Osvaldo1 de Sousa'],
    horarion: (hr:number):string =>{
        let resultante = hr <= 8? 'ponto normal':'fora do horário'
        return resultante
    }
}
console.log(`${funcionario2.noms}, ${funcionario2.horarion(5)}`)

//usando dois tipos de dados numa só variável
let nota:number | string = 10
console.log(nota)
nota= 'meu novo mundo'
console.log(nota)