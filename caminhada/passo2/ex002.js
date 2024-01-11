var numero1 = Number.parseInt(prompt("digite um número aqui: "));
var numero2 = Number.parseInt(prompt("Digite outro número aqui: "));
var resul = numero1 + numero2;
alert("O resultado da soma entre " + numero1 + " + " + numero2 + " = " + resul);

 //Aqui usamos dois tipos diferentes int e float:

var numero3 = Number.parseInt(prompt("digite mais um número aqui: "));
var numero4 = Number.parseFloat(prompt("Digite outro número aqui, mas decimal: "));
var resul2 = numero3 + numero4;
alert("O resultado da soma entre " + numero3 + " + " + numero4 + " = " + resul2);

//Agora só usando Number, o próprio js decide o que é decimal ou inteiro:

var numero5 = Number(prompt("Digite qualquer número: "));
var numero6 = Number(prompt("Digite outro qualquer número: "));
var resul3 = numero5 + numero6
alert(`O resultado da soma entre ${numero5} + ${numero6} = ${resul3}`) //usando template string

//Agora de string --> numero: String(n)

var numero7 = Number(prompt("Digite qualquer número: "));
var numero8 = Number(prompt("Digite outro qualquer número: "));
var resul4 = numero7 + numero8
alert("O resultado da soma entre " + numero7 + " + " + numero8 + " = " + String(resul4));