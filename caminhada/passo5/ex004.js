//Objeto
var obj = {a: 1, b:2, c:3 };

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj){
    //console.log(`obj. ${prop} = ${obj[prop]}`);
    console.log(obj[prop]);
}

//Outra forma
var o = {x:1, y:2, z:3};
var a = [], i = 0;
 for(a[i++] in o){
    
 }
 //os índices de array são propriedades de objetos
 console.log(a)