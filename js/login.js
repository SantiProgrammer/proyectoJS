/* Inicio de sesion */

const saveSessionStorage = sessionStorage.getItem("usuarios");

/* Mostrar y ocltar login */
const login = document.querySelector("#inicio");
const sesion = document.querySelector("#sesion");

login.addEventListener("click", (e) => {
  e.preventDefault();
  sesion.classList.add("display-login");
});

const Logout = document.querySelector("#close");

Logout.addEventListener("click", (e) => {
  e.preventDefault();
  sesion.classList.remove("display-login");
});

/* Array de usuarios */
let usuarios = [];

/* sessionStorage.getItem de usuarios  */
usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

/* Validacion de sesion */

const Acceso = document.getElementById("acceder");

Acceso.addEventListener("click", () => {
  let usuario = document.querySelector('#usuario').value;
  let contraseña = document.querySelector('#password').value;

  if ((usuario.toUpperCase() == "SANTIAGO") && (contraseña === "contraseña")) {
    usuarios.push("santiago");
    Swal.fire({
      icon: 'success',
      title: `Acceso concedido!`,
      text: `Bienvenido  ${usuario.toUpperCase()}`,
      showConfirmButton: false,
      timer: 2000
    });
    bienvenida()

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrecta, vuelva a intentarlo',
    })
  }
})

/* funcion para cerrar sesion */
const logout = () => {
  Swal.fire({
    title: '¿Cerrar sesion?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí'
  }).then((result) => {
    if (result.isConfirmed) {
      usuarios.shift()
      Swal.fire({
        title: 'Logout',
        text: 'Successful',
        showConfirmButton: false,
        icon: 'success',
        timer: 1200
      });
      bienvenida()
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  })
}

/* funcion de bienvenida y logeo exitoso */

const sesionUsuario = document.getElementById("cambioDeUsuario");
const botonInicio = document.getElementById("inicio");

function bienvenida() {
  if (usuarios.length === 1) {
    sesion.classList.remove("display-login");
    botonInicio.classList.add("hide-login");
    let bienvenido = document.createElement("div")
    bienvenido.innerHTML = `
   <p id="logout" class="botonLogin">${usuarios[0].toUpperCase()} | Cerrar Sesion</p>`
    sesionUsuario.appendChild(bienvenido);
    const btnLogout = document.getElementById(`logout`)
    btnLogout.addEventListener('click', () => {
      logout()
    })
  }
  sessionStorage.setItem('usuarios', JSON.stringify(usuarios))
}
bienvenida()