// Arreglo inicial
let listadeSuper = [];

listadeSuper[0] = "sal";
listadeSuper[1] = "aceite";
listadeSuper[2] = "arroz";
listadeSuper[3] = "huevos";
listadeSuper[4] = "leche";
listadeSuper[5] = "tomate";

console.log(listadeSuper);gi
console.log(listadeSuper[0]);

let ultimoElemento = listadeSuper.length - 1;
console.log(listadeSuper[ultimoElemento]);

listadeSuper.push("fideos")
listadeSuper.push("harina");

listadeSuper.unshift("pan")
listadeSuper.unshift("café");

console.log("Cantidad total actual:", listadeSuper.length);

let noHabia = listadeSuper.pop();
let comprado = listadeSuper.shift();

console.log("Tamaño final de la lista:", listadeSuper.length);