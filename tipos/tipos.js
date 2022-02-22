"use strict";
//tipos de dados no typescript
//string
let meunome = 'matuta';
console.log(meunome);
//numbers
let numero = 23;
console.log(numero);
let idade = 12.8;
console.log(idade);
//booleano
let valor = false;
console.log(valor);
let minhaIdade;
minhaIdade = 9;
console.log(typeof minhaIdade);
//array´s
let ruas = ['bairro do 6', 'Capalanga', 'Bairro do PAG'];
console.log(typeof ruas[0]);
//tuplas
let array = ['atd', 0, ''];
array = ['matuta', 12, 'melh'];
console.log(array);
//enums
var cor;
(function (cor) {
    cor[cor["verde"] = 0] = "verde";
    cor[cor["vermelho"] = 1] = "vermelho";
    cor[cor["amarelo"] = 2] = "amarelo";
    cor[cor["laranja"] = 3] = "laranja";
})(cor || (cor = {}));
let minhaCor = cor.amarelo;
console.log(minhaCor);
