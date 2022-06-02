/**  Simulador interactivo **/


alert("Hola Bienvenido a este Simulador interactivo");

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

//Funcion Saludar al usuario

function saludar(){
    const nombre = prompt("Ingresa tu nombre");
    const saludo = "Hola! " + nombre;
    alert(saludo)
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
