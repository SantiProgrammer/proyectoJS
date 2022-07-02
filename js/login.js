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
   alert(`Hola! ${usuario.value}`);
   sesion.classList.remove("login--show");
   botonInicio.classList.add("login--borrar");
   let bienvenido = document.createElement("div")
   bienvenido.innerHTML = `
   <p class="botonLogin">${usuario.value.toUpperCase()} |</p>`

   nombreLogeado.appendChild(bienvenido);
  }



  // Validacion de sesion
  
  botonAcceder.addEventListener("click", () => {  
     let usuario = document.querySelector('#usuario').value;
     let contraseña = document.querySelector('#password').value;

    (usuario.toUpperCase() == "SANTIAGO") && (contraseña === "12345") ? logeado() : 
    alert("Usuario o contraseña incorrecta, vuelva a intentarlo") });


    
    // Funcion localStorage

/*     localStorage.setItem('login', JSON.stringify(logeado))

    document.addEventListener('DOMContentLoaded', () => {
      if(localStorage.getItem('login')){
         logeado = JSON.parse(localStorage.getItem('login'))
      }
    })
   */

