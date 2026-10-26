// CESIA ESMERALDA ALVARADO SOLANO.

// 1. Definimos la interface con los datos de cada reservación.
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

// Creamos el arreglo con las cuatro reservaciones iniciales.
let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Ana Zavala", personas: 4, zona: "Terraza" },
    { id: 2, cliente: "Emanuel Martínez", personas: 2, zona: "Interior" },
    { id: 3, cliente: "Javier Alvarado", personas: 6, zona: "Terraza" },
    { id: 4, cliente: "Keisy Flores", personas: 7, zona: "Interior" }
];

// 2. Función para registrar una reservación al final.
function registrarReservacion(
    lista: Reservacion[],
    nueva: Reservacion
): void {
    lista.push(nueva);
}

// Agregamos una reservación normal al final.
registrarReservacion(reservaciones, {
    id: 5,
    cliente: "Isaac Alvarado",
    personas: 2,
    zona: "Interior"
});

// Agregamos una reservación prioritaria al inicio.
reservaciones.unshift({
    id: 6,
    cliente: "Yaquelin Alvarado",
    personas: 4,
    zona: "Terraza"
});

// Mostramos la lista antes de atender.
console.log("==== LISTA ANTES DE ATENDER ====");
console.log(reservaciones);

// 3. Función para atender la primera reservación pendiente.
function atenderReservacion(lista: Reservacion[]): void {
    let atendida: Reservacion | undefined = lista.shift();

    if (atendida !== undefined) {
        console.log("Cliente atendido:", atendida.cliente);
        console.log("Cantidad de personas:", atendida.personas);
    } else {
        console.log("No hay reservaciones pendientes.");
    }
}

// Atendemos la primera reservación pendiente.
console.log("==== ATENCIÓN DE RESERVACIÓN ====");
atenderReservacion(reservaciones);

// 4. Buscamos una reservación por su identificador.
console.log("==== BÚSQUEDA DE RESERVACIÓN ====");

let buscada: Reservacion | undefined = reservaciones.find(
    (reservacion: Reservacion): boolean => reservacion.id === 2
);

if (buscada !== undefined) {
    console.log("Reservación encontrada:");
    console.log(buscada);
} else {
    console.log("No se encontró la reservación.");
}

// Probamos con un identificador que no existe.
let noEncontrada: Reservacion | undefined = reservaciones.find(
    (reservacion: Reservacion): boolean => reservacion.id === 7
);

if (noEncontrada !== undefined) {
    console.log("Reservación encontrada:");
    console.log(noEncontrada);
} else {
    console.log("No existe una reservación con ID 7.");
}

// 5. Guardamos la cantidad original antes de filtrar.
let cantidadAntes: number = reservaciones.length;

console.log("==== COMPROBACIÓN DEL FILTRO ====");
console.log("Cantidad antes de filtrar:", cantidadAntes);

// Filtramos las reservaciones de Terraza con cinco personas o más.
let terraza: Reservacion[] = reservaciones.filter(
    (reservacion: Reservacion): boolean =>
        reservacion.zona === "Terraza" && reservacion.personas >= 5
);

// Mostramos directamente el arreglo filtrado.
console.log("==== TERRAZA CON 5 PERSONAS O MÁS ====");

if (terraza.length > 0) {
    console.log(terraza);
} else {
    console.log("No hay coincidencias.");
}

// Guardamos la cantidad del arreglo original después de filtrar.
let cantidadDespues: number = reservaciones.length;

console.log("Cantidad después de filtrar:", cantidadDespues);
console.log("Cantidad de coincidencias:", terraza.length);

// Comparamos ambas cantidades para comprobar que filter()
// no eliminó reservaciones del arreglo original.
if (cantidadAntes === cantidadDespues) {
    console.log("El arreglo original no fue modificado por filter().");
} else {
    console.log("La cantidad del arreglo original cambió.");
}

// 6. Probamos la función de registro con un arreglo vacío.
let listaVacia: Reservacion[] = [];

registrarReservacion(listaVacia, {
    id: 7,
    cliente: "Manuel Alvarado",
    personas: 3,
    zona: "Interior"
});

console.log("==== PRUEBA DE REGISTRO CON LISTA VACÍA ====");
console.log(listaVacia);

// Probamos la función de atención con una lista vacía.
console.log("==== PRUEBA DE ATENCIÓN CON LISTA VACÍA ====");

let otraListaVacia: Reservacion[] = [];
atenderReservacion(otraListaVacia);

// 7. Mostramos el estado final de las reservaciones pendientes.
console.log("==== RESERVACIONES PENDIENTES ====");
console.log(reservaciones);
console.log("Total de reservaciones pendientes:", reservaciones.length); 