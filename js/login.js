// Inicio de sesion

const openSesion = document.querySelector("#inicio");
const sesion = document.querySelector("#sesion")
const closeSesion = document.querySelector("#close")

// Mostrar y ocular login screen 

openSesion.addEventListener("click", (e) => {
   e.preventDefault();
 sesion.classList.add("login--show");
});
 
 closeSesion.addEventListener("click", (e) => {
  e.preventDefault();
   sesion.classList.remove("login--show");
  });
  
  const botonAcceder = document.getElementById("acceder")
  const nombreLogeado = document.getElementById("cambioLogeo")
  const botonInicio = document.getElementById("inicio")

  
  function logeado() {
   Swal.fire({
      icon: 'success',
      title: `Hola! ${usuario.value}`,
      text: 'Bienvenido',

    }) 
   sesion.classList.remove("login--show");
   botonInicio.classList.add("login--borrar");
   let bienvenido = document.createElement("div")
   bienvenido.innerHTML = `
   <p class="botonLogin">${usuario.value.toUpperCase()}</p>`

   nombreLogeado.appendChild(bienvenido);

   if(botonInicio.classList.contains('login--borrar')){
    localStorage.setItem('logeado', 'true');
} 
  }


  // Obtenemos el modo actual.

if(localStorage.getItem('logeado') === 'true'){
  botonInicio.classList.add('login--show"');
}




  // Validacion de sesion
  
 botonAcceder.addEventListener("click", () => {  
     let usuario = document.querySelector('#usuario').value;
     let contraseña = document.querySelector('#password').value;

    (usuario.toUpperCase() == "SANTIAGO") && (contraseña === "contraseña") ? logeado() : 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El usuario o contraseña son incorrectos!',

    }) 
   });






