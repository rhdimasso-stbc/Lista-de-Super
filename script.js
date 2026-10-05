let listadeSuper = [];

listadeSuper[0]="sal";
listadeSuper[1]="aceite";
listadeSuper[2]="arroz";
listadeSuper[3]="huevos";
listadeSuper[4]="leche";
listadeSuper[5]="tomate";

console.log(listadeSuper);

console.log(listadeSuper[0]);

listadeSuper.push("pan");
listadeSuper.push("queso");

listadeSuper.unshift("azucar");
listadeSuper.unshift("frijoles");

console.log("Cantidad total de productos:", listadeSuper.length);

// Remover el último producto y guardarlo en la variable noHabia
let noHabia = listadeSuper[listadeSuper.length - 1];
listadeSuper.length = listadeSuper.length - 1;

// Remover el primer producto y guardarlo en la variable comprado
let comprado = listadeSuper[0];

for (let i = 0; i < listadeSuper.length - 1; i++) {
  listadeSuper[i] = listadeSuper[i + 1];
}

listadeSuper.length = listadeSuper.length - 1;

let ultimoElemento = listadeSuper.length - 1
console.log(listadeSuper[ultimoElemento])

console.log("Tamaño final de la lista:", listadeSuper.length);