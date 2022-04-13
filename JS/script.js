
/*

               TRABAJO CLASE 1
let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let edad = parseInt(prompt("Ingrese su edad"));

let resultado = alert("Su nombre es: " + nombre + " " + apellido);
let anos = alert("Su edad es: " + edad);
alert("La fecha actual es: " + "2022");


*/

                    /* TRABAJO CLASE 2 

let ingresarNombre = prompt("Ingresar nombre (Que empiece por mayuscula): ");
alert (ingresarNombre.charAt(0));

if (ingresarNombre.charAt(0) === "P"){
    alert("El nombre comienza con 'P' mayuscula");
} else {
    alert("ERROR.. El nombre no comienza con 'P' mayuscula");
}

*/

            /* TRABAJO CLASE 3 (ENTREGA COMPLEMENTARIA) */ 

    /* Pedir número mediante prompt y sumarle otro número en cada repetición,
        realizando una salida por cada resultado 


for (let i = 1; i <= 3; i++) {
    let numero = parseInt(prompt("Ingresar un numero: "))
    let suma = numero + 10
    alert("El resultado es: " + suma)
}

*/

            /* TRABAJO CLASE 3 (ENTREGA COMPLEMENTARIA) */ 

    /* Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
    realizando una salida por cada resultado, hasta que se ingresa “ESC”. */ 

/*

let comenzar = prompt("Desea Coemnzar? Ingrese SI de ser correcto y NO para abandonar");

while (comenzar != "NO") {
    let nombre = prompt("Ingrese su Nombre");
    let apellido = prompt("Ingrese su Apellido");
    let nombreCompleto = nombre + " " + apellido
    alert("Nombre completo: " + nombreCompleto)
    break
} 

*/


            /* TRABAJO CLASE 3 (ENTREGA COMPLEMENTARIA) */ 

    /* Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
    realizando una salida por cada resultado, hasta que se ingresa “ESC”. */ 

/*

let texto = prompt("Ingrese texto")
let array = []
while (texto != "ESC"){
    array.push(texto)
    texto = prompt("Ingrese otro texto")
    alert(array)
}


*/ 

                    /*Pedir un número por prompt
 repetir la salida del mensaje “Hola” la cantidad de veces ingresada.


let numero = parseInt(prompt("Ingresar un numero: "))


for (let i = 0; i < numero; i++){
    alert("Hola")
}

*/ 

/* 

let nombre = prompt("Ingrese su nombre: ");
let edad = prompt(" Ingrese su edad:");
let tabla;
let i;
if (edad>=18){
    document.write("Hola " + nombre + "," + " bienvenido, tienes " + edad + " y se permite tu ingreso" ); 
    tabla=parseInt(prompt("Ingrese la tabla que quiere ver"));
    for (i=0; i<=10; i++) {
        document.write(tabla + " x " + i + " = " + i * tabla);         
        document.write("<br>");
     } 
}else{
    document.write (nombre + " no tienes edad para ingresar a este sitio");      
}

*/

/* EJEMPLO 1
------------------------------------------------------------------------------------------
let numero1 = parseInt(prompt("Ingresar un numero: "))

for (let i = 0; i < 3; i++){
    let numero2 = parseInt(prompt("Ingresar otro numero: "))
    let suma = numero1 + numero2
    alert("La suma es igual a: " + numero1 + " + " + numero2 + " = " + suma)
}
-------------------------------------------------------------------------------------------
*/

/* Entrega 1
-------------------------------------------------------------------------------------------*/

let nombreCompleto = prompt("Ingresar su Nombre y Apellido: ")
let Tabla;

if (nombreCompleto != "ESC") {
    document.write("!Bienvenido! ", nombreCompleto, "<br>")
    Tabla = prompt("Ingrese la tabla que desea ver: ")
    document.write("La tabla ingresada es la del.. ", Tabla, "<br>")
    for (let i = 0; i <= 10; i++){
        document.write(Tabla , " x " , i + " = " , i * Tabla, "<br>")
    }
}
