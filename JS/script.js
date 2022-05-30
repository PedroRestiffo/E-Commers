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

/* Entrega COMPLEMENTARIA 1
-------------------------------------------------------------------------------------------

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
*/

/* Entrega OBLIGATORIA 1
-------------------------------------------------------------------------------------------

let arrayNombre = ["Pedro", "Matias", "Joaquin"];
let arrayCaballos = ["Louno", "Picassa", "Simbaue"];
let arrayOrden = [];
let arrayClases = [];

for (let i = 0; i < 3; i++) {
  arrayOrden = arrayNombre[i] + " con " +arrayCaballos[i];
  arrayClases.push(arrayOrden);
}

console.log(
  ` La primer Clase es.. ${arrayClases[0]}\n La segunda Clase es.. ${arrayClases[1]}\n La tercer Clase es.. ${arrayClases[2]}`
);*/
/*                         <<  PRE-ENTREGA 1 >>
-------------------------------------------------------------------------------------------
*/

const saludar = () => {
  let nombre;

  do {
    nombre = prompt("Ingrese Su Nombre! : ");
  } while (nombre === "" || !isNaN(nombre));
  console.log(`Hola! ${nombre} !Bienvenido al Hipico los Cerros`);
};

const menu = () => {
  let opcion;

  do {
    opcion = parseInt(
      prompt(
        `Que Actividad desea realizar! :\n 1) EQUITACION\n 2) ADIESTRAMIENTO\n 3) VOLTEO`
      )
    );
  } while (opcion > 3 || opcion < 1 || isNaN(opcion));

  let auxOpcion;

  switch (opcion) {
    case 1:
      auxOpcion = `EQUITACION`;
      break;
    case 2:
      auxOpcion = `ADIESTRAMIENTO`;
      break;
    case 3:
      auxOpcion = `VOLTEO`;
      break;
  }
  return auxOpcion;
};

const info = () => {
  if (actividad === "EQUITACION") {
    return "El costo de las clases es de " + 6000 + " Por mes";
  } else if (actividad === "ADIESTRAMIENTO") {
    return "El costo de las clases es de " + 5500 + " Por mes";
  } else {
    return "El costo de las clases es de " + 4500 + " Por mes";
  }
};
let validez;
const confirmacion = () => {
  validez = confirm("Desea confirmar la clase para comenzar?");
  if (validez === true) {
    return "Buenisimo!! Estaremos en contacto para comenzar";
  } else {
    return ":( ";
  }
};

class Alumno {
  constructor(id, nombre, apellido, edad, fichaMedica, condicion, costo) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fichaMedica = fichaMedica;
    this.condicion = condicion;
    this.costo = costo;
  }
}
const alumno1 = new Alumno(
  "1",
  "Pedro",
  "Restiffo",
  "21",
  "NO",
  "Profesor",
  ""
);
const alumno2 = new Alumno(
  "2",
  "Rufina",
  "Tomasseli",
  "4",
  "SI",
  "Alumno",
  "150usd"
);
const alumno3 = new Alumno(
  "3",
  "Matilda",
  "Zoco",
  "13",
  "SI",
  "Alumno",
  "150usd"
);
const alumno4 = new Alumno(
  "4",
  "Joaquin",
  "Cuitino",
  "16",
  "SI",
  "Alumno",
  "150usd"
);
const alumno5 = new Alumno(
  "5",
  "Matias",
  "Restiffo",
  "24",
  "SI",
  "Profesor",
  ""
);

/* LLAMADOS A FUNCIONES */

//saludar();
//let actividad = menu();
//let precioActividad = info(actividad);
//console.log(actividad);
//console.log(precioActividad);

//let confirmacionClases = confirmacion();
//console.log(confirmacionClases);

let alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5];
let carrito = [];

//console.log(
//  "Los alumnos Aprobados debido a tener ficha medica Para montar son..",
//  alumnos.filter((alumno) => alumno.fichaMedica == "SI")
//);
//console.log(
//  "Los alumnos Desaprobados debido a no tener ficha medica Para montar son..",
//  alumnos.filter((alumno) => alumno.fichaMedica == "NO")
// );

let divClases = document.getElementById("divClases");

alumnos.forEach((alumno) => {
  divClases.innerHTML += `
  <div class="card" id="alumno${alumno.id} style="width: 14rem; margin: 15px;">
           <div class="card-body">
            <h5 class="card-title">Nombre: ${alumno.nombre}</h5>
                <p>Apellido: ${alumno.apellido} </p>
                <p>Edad: ${alumno.edad} </p>
                <p>Ficha: ${alumno.fichaMedica} </p>
                <p>Condicion: ${alumno.condicion} </p>
                <p>Costo de la clase: ${alumno.costo} </p>
                <button id="boton${alumno.id}" class="btn btn-dark">Mostrar por Local</button>
            </div>
        </div>
  `;
});

alumnos.forEach((alumno) => {
  document.getElementById(`boton${alumno.id}`).addEventListener("click", () => {
    carrito.push(alumno);
    localStorage.setItem("productosCarrito", JSON.stringify(carrito));
  });
});
//----------------------------------------------------------------------------------------------------------------------------------
// DESAFIO COMPLEMENTARIO APLICAR CLASE DE OPERADORES AVANZADOS
alumnos.forEach((alumnos) => {
  document
    .getElementById(`boton${alumnos.id}`)
    .addEventListener("click", () => {
      let desdestructuracion = ({
        nombre,
        apellido,
        edad,
        fichaMedica,
        condicion,
        costo,
      } = alumnos);

      console.log(nombre);
      console.log(apellido);
      console.log(edad);
      console.log(fichaMedica);
      console.log(condicion);
      console.log(costo);

      console.log(alumno1?.altura || "La propiedad no existe");
      carrito.push(desdestructuracion);
    });
});

// SWEET ALERT
/*
Swal.fire({
  title: "Bienvenido!",
  text: `Seleccione el usuario a inspeccionar`,
  confirmButtonText: "Continuar!",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});
*/
// Fetch

let divDolar = document.getElementById("divDolar");

fetch("https://criptoya.com/api/dolar")
  .then((response) => response.json())
  .then(({ blue, ccb, ccl, mep, oficial, solidario }) => {
    //let {blue, ccb, ccl, mep, oficial, solidario} = datos
    divDolar.innerHTML = `
            <h2>Tipos de dolar </h2>
            <p>Dolar Oficial: ${oficial} </p>
            <p>Dolar Solidario: ${solidario} </p>
            <p>Dolar Mep: ${mep} </p>
            <p>Dolar Ccl: ${ccl} </p>
            <p>Dolar Ccb: ${ccb} </p>
            <p>Dolar Blue: ${blue} </p>
        `;
  });
