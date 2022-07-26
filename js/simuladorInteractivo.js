/**  Simulador interactivo **/

//Funcion Saludar al usuario
const saludar = document.getElementById("saludo");
saludar.addEventListener("click", respuestaClick)
function respuestaClick(){
     
    Swal.fire({
    icon: 'success',
    title: 'Ingresa tu nombre:',
    input: 'text',
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: `Hola ${result.value}!`,
            text:'bonito dia! 😎',
          })
        }
      });

}


//Funcion promedio de calificaciones:
const promedio = document.getElementById("promedioAlumno");
promedio.addEventListener("mouseup", promedioAlumno)
function promedioAlumno(){
    alert('Ingresa tus calificaciones para obtener tu promedio.');
    const calificación1 = parseInt(prompt ("Ingrese su calificación de HTML:"));
    const calificación2 = parseInt(prompt ("Ingrese su calificación de CSS:"));
    const calificación3 = parseInt(prompt ("Ingrese su calificación de JS:"));
    const sumaDeCalificaciones = calificación1 + calificación2 + calificación3;
    const promedio = sumaDeCalificaciones / 3;
    if(promedio >= 6){
        Swal.fire({
            icon: 'success',
            title: 'Felicidades!',
            text: 'Aprobaste con: ' + promedio,
          })
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Reprobaste tu peromedio es menor a 6',
          })
}
}


//Funcion Calculadora con switch:
const botonCalculadora = document.getElementById("botonCalculadora");
botonCalculadora.addEventListener("click",calculadora)

function calculadora(primernum, segundonum, operacion) {
    switch (operacion) {
        case "+":
           return primernum + segundonum;
            break;
        case "-":
            return primernum - segundonum;
            break;
        case "*":
            return primernum * segundonum;
            break;
        case "/":
            return primernum / segundonum;
            break;
        default: "Valores nulos";
            break;
    }

        let pregunta1 = Number(prompt("ingresa el primer numero"))
        let operadorMat = prompt("Ingresa el operador +,-,* ó /.")
        let pregunta2 = Number(prompt("ingresa el segundo numero"));
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Reprobaste tu peromedio es menor a 6',
          })
        alert(calculadora(pregunta1,pregunta2,operadorMat))
    }


//Funcion calculadora iva:
const botonCalculadoraIva = document.getElementById("botonCalculadoraIva");
botonCalculadoraIva.addEventListener("click", calculadoraIva)

function calculadoraIva(){
    const precioDelProducto = Number(prompt("Ingrese el precio del producto"));
    const iva = 1.15;
    const precioConIva = precioDelProducto * iva;
    Swal.fire({
        icon: 'success',
        title: precioConIva ,
        text: 'es el precio con iva!',
      })

}


//Funcion password:
const botonCicloWhile = document.getElementById("botonCicloWhile");
botonCicloWhile.addEventListener("click", cicloWhile)

function cicloWhile(){
alert('Ciclo while...');
alert('Recodatorio de contraseña: contraseña');
let password = '';
while(password != 'contraseña'){
    password = prompt('Introduzca su contraseña:')
}
Swal.fire({
    icon: 'success',
    title: 'Acceso concedido!',
    text: 'Bienvenido',
  })
}


//Funcion do while:
const botonDoWhile = document.getElementById("botonDoWhile");
botonDoWhile.addEventListener("click", doWhile)

function doWhile(){
alert('Ciclo do while...');
alert('Recodatorio de contraseña: contraseña');
do{
    password = prompt('Introduzca su contraseña:')
}while(password != 'contraseña')
Swal.fire({
    icon: 'success',
    title: 'Acceso concedido!',
    text: 'Bienvenido',
  })
}


//Funcion Arrays
const botonArray = document.getElementById("botonArray");
botonArray.addEventListener("click", array);

function array(){

alert("Agrega 3 nombres a la lista:")
    const nombresArray = [];
    for(i=1;i<=3;i++){
        let nuevoNombre = prompt("Ingresa el nombre");
        nombresArray.push(nuevoNombre)
        alert(nuevoNombre + " agregado correctamente")
    }
    Swal.fire({
        icon: 'success',
        title: 'Nombres en la lista:',
        text: `${nombresArray } un total de ${nombresArray.length} nombres.`,
      })
   
}


//botonDinamico()
let botonDinamico = document.getElementById("botonDinamico");
botonDinamico.addEventListener("click" ,cambiaColor)

function cambiaColor(){

    let color = prompt("Ingresa si, si quieres cambiar el color");
    
    if(color === "si"){
        botonDinamico.className = "container1";
        Swal.fire({
            icon: 'success',
            title: 'Se cambio el color exitosamente!',
          })
    }else if(color !== "si"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hubo ningun cambio',
          })
    }
}




//agregarBoton
const botonesBox = document.getElementById("botones-box");
const botonAgregarBoton = document.getElementById("botonAgregarBoton");
botonAgregarBoton.addEventListener("click" , agregarBoton);

function agregarBoton(){
    const boton = document.createElement("button");
    boton.className = "boton";
    boton.innerHTML = `Boton Nuevo <img class="imgnew" src="./imagenes/new.png" alt="imgnew">`;
    botonesBox.appendChild(boton);
    Swal.fire({
        icon: 'success',
        title: 'Agregado',
        text:'Boton agregado correctamente',
      });
}

//eliminarBoton
const botonEliminarBoton = document.getElementById("botonEliminarBoton");
botonEliminarBoton.addEventListener("click" , eliminarBoton);

function eliminarBoton(){
botonEliminarBoton.remove();
Swal.fire(
  'Eliminado!',
  'Boton eliminado correctamente!',
  'success'
);

}
/* Fin */

