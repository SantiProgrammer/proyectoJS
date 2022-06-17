/**  Simulador interactivo **/


alert("Hola Bienvenido a este Simulador interactivo");

//Funcion Saludar al usuario

function saludar(){
    const nombre = prompt("Ingresa tu nombre");
    const saludo = "Hola! " + nombre;
    alert(saludo)
}


//Funcion promedio de calificaciones:

function promedioAlumno(){
    alert('Ingresa tus calificaciones para obtener tu promedio.');
    const calificación1 = parseInt(prompt ("Ingrese su calificación de HTML:"));
    const calificación2 = parseInt(prompt ("Ingrese su calificación de CSS:"));
    const calificación3 = parseInt(prompt ("Ingrese su calificación de JS:"));
    const sumaDeCalificaciones = calificación1 + calificación2 + calificación3;
    const promedio = sumaDeCalificaciones / 3;
    if(promedio >= 6){
        alert("Felicitaciones! aprobaste con: " + promedio);
    }else{
        alert("Reprobaste tu peromedio es menor a 6")
}
}


//Funcion Calculadora con switch:

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


alert(calculadora(pregunta1,pregunta2,operadorMat))
}

//Funcion calculadora iva:

function calculaoraIva(){
    const precioDelProducto = Number(prompt("Ingrese el precio del producto"));
    const iva = 1.15;
    const precioConIva = precioDelProducto * iva;
    alert("El precio del pruducto con iva es: " + precioConIva)
}



//Funcion carrito de compras:

function carrito(){
    alert("Esta función muestra los 3 productos que argeges en la consola." )
    for(i=1;i<=3;i++){
        let producto = prompt("Ingresa el nombre del producto");
        alert(producto + " agregado correctamente")
        console.log("Los productos ingresados son: " + producto)
    }
    alert("abre la consola para ver los productos agregados")
}

//Funcion password:

function cicloWhile(){
alert('Ciclo while...');
alert('Recodatorio de contraseña: contraseña');
let password = '';
while(password != 'contraseña'){
    password = prompt('Introduzca su contraseña:')
}
alert('Acceso concedido!')
}


//Funcion do while:

function doWhile(){
alert('Ciclo do while...');
alert('Recodatorio de contraseña: contraseña');
do{
    password = prompt('Introduzca su contraseña:')
}while(password != 'contraseña')
alert('Acceso concedido!')
}


//Funcion Arrays

function array(){
    alert('Agrega 3 nombres al array')
    const nombresArray = ["Nivardo","Maria Jose","Rene"];
    for(i=1;i<=3;i++){
        let nuevoNombre = prompt("Ingresa el nombre");
        nombresArray.push(nuevoNombre)
        alert(nuevoNombre + " agregado correctamente")
    }
    alert("Estos son los nombres agregados a la lista " + nombresArray + " un total de "+ nombresArray.length + " nombres")
}


//Array.filter

function arrayFilter(){
    alert("Busca precios entre 23 y 123234");
    let precio = prompt("Buscar productos de precio menor a:");
    let productos = [
        {nombre: "Arroz", precio: 123},
        {nombre: "Pan", precio: 1233},
        {nombre: "Harina", precio: 1263},
        {nombre: "Leche", precio: 23},
        {nombre: "Cafe", precio: 123234},
        ];

    //filter ingresa el precio
    
    let filtrados = productos.filter(el => el.precio < precio);
    console.log(filtrados);
    alert("Se mostro precios menores a " + (precio) + " en la consola." );
}

//Array.find
function arrayFind(){
    let busqueda = prompt("Busca productos como: Arroz,Pan,Harina,Leche o Cafe.");
    let productos = [
        {nombre: "Arroz", precio: 123},
        {nombre: "Pan", precio: 1233},
        {nombre: "Harina", precio: 1263},
        {nombre: "Leche", precio: 23},
        {nombre: "Cafe", precio: 123234},
        ];

    //find "Pan"
    let producto = productos.find(el => el.nombre === busqueda);
    console.log(producto);
    alert("Se mostro " + (busqueda) + " y su precio en la consola.")
}


//botonDinamico()
function botonDinamico(){
    let contenedor = document.getElementById("botonDinamico");
    let color = prompt("Ingresa si, si quieres cambiar el color");
    
    if(color === "si"){
      contenedor.className = "container";
      alert("Se cambio el color exitosamente!");
    }else if(color !== "si"){
        alert("No hubo ningun cambio");
    }
}


//eliminarBoton
function eliminarBoton(){

    let restarBoton = document.getElementById("eliminarBoton");
    restarBoton.remove();
    alert("Boton eliminado correctamente!");
}

//agregarBoton
function agregarBoton(){

    let boton = document.createElement("button");
    boton.innerHTML = `Boton Nuevo <img class="imgnew" src="./imagenes/new.png" alt="imgnew">`;
    document.body.append(boton); 
}
