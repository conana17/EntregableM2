/* Usted como encargado de la creación de una página 
web de registro de personas para una acitividad de 
turismo. Se le ha solicitado un formulario para 
registrar los siguientes datos:

    Nombre
    Edad
    Peso
    Condicion de salud
    Alergias
    
Importante: Solamente usando la consola.

1) Lista de personas mayores de 18 años
2) Cantidad de personas con peso mayor de 90 kg 
3) Entregar el promedio de edad de todos los asistentes
4) Mostrar los nombres de las personas alfabéticamente
 */

let personas= 
    [{Nombre:"Teresa", Edad:55, Peso:65, Salud:"Sano", alergia:"si"}, 
    {Nombre: "Ricardo", Edad:60, Peso:80,Salud:"enfermo", alergia:"no"}, 
    {Nombre:"Felipe", Edad:24, Peso:61, Salud:"enfermo", alergia:"si"}, 
    {Nombre:"Javiera", Edad:31, Peso:58, Salud:"Sano", alergia:"no"}, 
    {Nombre:"Simón", Edad:5, Peso: 30, Salud:"Sano", alergia:"si"},
    {Nombre: "Diego", Edad:16, Peso: 68, Salud:"enfermo", alergia:"si"},
    {Nombre: "Marcelo", Edad:35, Peso:120,Salud:"Sano", alergia:"no"}, 
    {Nombre: "Manuel", Edad:55, Peso:98, Salud:"Sano", alergia:"si"}];





// function mostrarlista(){
//     personas.map(i,any)

// }

function mostrarTabla() {
let cuerpodelatabla = "" //vacío porque aqui se guardan las filas de la tabla 
for (let i=0; i<personas.length; i++){
    let persona = personas[i];
    cuerpodelatabla+=`<tr><td>${i}</td>
                    <td>${persona.Nombre}</td>
                    <td>${persona.Edad}</td>
                    <td>${persona.Peso}</td>
                    <td>${persona.Salud}</td>
                    <td>${persona.alergia}</td>
                    </tr>`

}
//${Interpolación}
document.getElementById("losDatos").innerHTML = cuerpodelatabla;
}

mostrarTabla();

// ----------------------- Aquí termina la parte de la tabla-------------------------

let textoNombre = document.getElementById("nombreTxt");
let numeroEdad = document.getElementById("edadTxt");
let pesoNumero = document.getElementById("pesoTxt");
let textoSalud = document.getElementById("saludTxt");
let opcionAlergiauno = document.getElementById("inlineRadio1");
let opcionAlergiados = document.getElementById("inlineRadio2");

function agregarDatos(e) {
    e.preventDefault();
 if (document.getElementById("formulario").checkValidity()) {
    let datoNombre = textoNombre.value;
    let datoEdad = +numeroEdad.value;
    let datoPeso = +pesoNumero.value;
    let datoSalud = textoSalud.value;
    let datoAlergia = opcionAlergiauno.checked ? "SI":"NO";

    personas.push({Nombre:datoNombre, Edad:datoEdad, Peso:datoPeso, Salud:datoSalud, alergia:datoAlergia});
    
    personas.sort( compare );
  
       
    mostrarTabla();
    console.log(personas);
 }

return false;

}

document.getElementById("formulario").addEventListener("submit",agregarDatos);



let cantidadDepersonas = personas.length; 

let lista = [];
for (let i = 0; i<personas.length-1; i++){
    if (personas[i].Edad > 18) {

        lista.push(personas[i]);
    } 
    
}
console.log(lista);


let pesoMayoraNoventa = 0 
for (let i=0; i<personas.length-1; i++){
    if ( personas[i].Peso > 90) {
       pesoMayoraNoventa++;
       console.log(pesoMayoraNoventa)
    }
    
}

let suma = 0;
for (let i=0; i<cantidadDepersonas-1; i++){
    suma += personas[i].Edad;
}

let promedio = suma/cantidadDepersonas-1;

console.log(promedio);

//--------------------------------ORDEN ALFABÉTICO-------------------------------------


function compare( a, b ) {
    if ( a.Nombre.toUpperCase() < b.Nombre.toUpperCase()){
      return -1;
    }
    if ( a.Nombre.toUpperCase() > b.Nombre.toUpperCase() ){
      return 1;
    }
    return 0;
  }
  