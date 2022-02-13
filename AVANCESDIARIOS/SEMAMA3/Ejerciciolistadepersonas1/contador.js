lista = [{nombre: "Juan", edad: 30}, {nombre: "Cristian", edad:14}, {nombre:"carla", edad:20}];
// num elementos:3
// num Juan:1
// promedio 21.3333
// num mayores=2

let num_elementos = lista.lenght;
console.log(num_elementos);
// Buscando a Juan
// Contador que parte en cero 
let num_juan_1=0;
for (let i=0; i<num_elementos; i++){
    if (lista [i].nombre ==="Juan") {
        num_juan_1++;
    }
}
console.log(num_juan_1);

// forma más moderna
// let num_juan_2=0;
// el x representa cada elemento de la lista, pero podría ser cualquier otra letra
let num_juan_2 = lista.filter(x => x.nombre ==="Juan").lenght;


// ---------------------Promedio---------------------------
let suma = 0;
    for (let i=0; i<num_elementos; i++) {
        suma += lista [i].edad; 

    }

let promedio=suma/num_elementos;
console.log(promedio);

// forma más corta

function sumar_edades (anterior, nuevo){
    return anterior + nuevo.edad;
}
let promedio_2= lista.reduce(sumar_edades, initialValue=0)/num_elementos;
console.log(promedio_2);

// ------------------------- Mayores a 18 ------------------------------

let mayores_1=0;
for (let i=0; i<num_elementos; i++) {
    if (lista [i].edad >= 18) {
        mayores_1++;
    }
}
console.log(mayores_1);

