/*
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
  "0"
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
  "0"
);

let alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5];
let carrito = [];

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
// Fetch

let divDolar = document.getElementById("divDolar");

fetch("https://criptoya.com/api/dolar")
  .then((response) => response.json())
  .then(({ blue, ccl, oficial, solidario }) => {
    divDolar.innerHTML = `
            <h2>Tipos de dolar </h2>
            <p>Dolar Oficial: ${oficial} </p>
            <p>Dolar Solidario: ${solidario} </p>
            <p>Dolar Ccl: ${ccl} </p>
            <p>Dolar Blue: ${blue} </p>
        `;
  }, 3000);
*/


const Clases = document.querySelector("#divClases")

fetch("./datos.json")
.then((response)=> response.json())
.then((data)=> {
  data.forEach(element => {
    Clases.innerHTML +=`
    <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
            <div class="card-body">
                <h4 class="card-title">${element.nombre} ${element.apellido}</h4>
                <p class="card-text">${element.edad}</p>
                <p class="card-text">${element.costo}</p>
            </div>
            <button class="btn">Boton</button>
        </div>
    `
  });
  let btns = document.querySelectorAll(".btn")
    btns.forEach(e => e.addEventListener("click", ()=>
    console.log(`El costo de la clase en pesos argentinos es de.. ${25 * 210.375}`)))
})

let divDolar = document.getElementById("divDolar");

setInterval(()=> {
    fetch("https://criptoya.com/api/dolar")
    .then(response=>response.json())
    .then(({ccl,mep,oficial,solidario,blue})=>{
        divDolar.innerHTML=`
            <h2>Tipos de dolar</h2>
            <p>Dolar Oficial: ${oficial}</p>
            <p>Dolar Solidario: ${solidario}</p>
            <p>Dolar Mep: ${mep}</p>
            <p>Dolar Ccl: ${ccl}</p>
            <p>Dolar Blue: ${blue}</p>
            `
    })
    .catch(error => console.log(error))

}, 3000)
