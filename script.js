// Actividad Lista de Super I

let listadeSuper = [];

listadeSuper[0] = "sal";
listadeSuper[1] = "aceite";
listadeSuper[2] = "arroz";
listadeSuper[3] = "huevos";
listadeSuper[4] = "leche";
listadeSuper[5] = "tomate";

console.log(listadeSuper);
console.log(listadeSuper[0]);

let ultimoElemento = listadeSuper.length - 1;
console.log(listadeSuper[ultimoElemento]);

// Actividad Lista de Super II

listadeSuper.push("fideos")
listadeSuper.push("harina");

listadeSuper.unshift("pan")
listadeSuper.unshift("café");

console.log("Cantidad total actual:", listadeSuper.length);

let noHabia = listadeSuper.pop();
let comprado = listadeSuper.shift();

// Actividad Lista de Super III

console.log("Tamaño final de la lista:", listadeSuper.length);

function logItems(items) {
    items.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });
}

let continuar = true;

while (continuar) {
    const comando = prompt(
        'Ingresá un comando: "nuevo", "listar", "borrar" o "salir"'
    );

    if (comando === null) {
        continuar = false;
        continue;
    }

    switch (comando.trim().toLowerCase()) {
        case "nuevo": {
            const nuevoItem = prompt("Ingresá el producto que queres agregar:");

            if (nuevoItem !== null && nuevoItem.trim() !== "") {
                listadeSuper.push(nuevoItem.trim());
                console.log(`Producto agregado: ${nuevoItem.trim()}`);
            }
            break;
        }
        case "listar":
            logItems(listadeSuper);
            break;
        case "borrar": {
            const indiceIngresado = prompt(
                "Ingresá el índice del producto que queres eliminar:"
            );
            const indice = Number(indiceIngresado);

            if (
                indiceIngresado !== null &&
                indiceIngresado.trim() !== "" &&
                Number.isInteger(indice) &&
                indice >= 0 &&
                indice < listadeSuper.length
            ) {
                const [productoEliminado] = listadeSuper.splice(indice, 1);
                console.log(`Producto eliminado: ${productoEliminado}`);
            } else if (indiceIngresado !== null) {
                console.log("Índice inválido.");
            }
            break;
        }
        case "salir":
            continuar = false;
            console.log("Súper App finalizada.");
            break;
        default:
            console.log('Comando inválido. Use "nuevo", "listar", "borrar" o "salir".');
    }
}