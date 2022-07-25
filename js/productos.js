/* Declaración de constructor objeto Producto */
class Producto {
  constructor(producto) {
    this.id = producto.id;
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.img = producto.img;
    this.cantidad = 1;
  }
  sumar1ACantidad() {
    this.cantidad++;
  }
  TotalDelCarrito() {
    this.totalPrecio = this.precio * this.cantidad;
  }
}

/* getElementByID */
const productosWrapper = document.getElementById("productos-wrapper")
const carritoWrapper = document.getElementById("carrito-wrapper")
const productosCounter = document.getElementById("productosCounter")
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarTotal = document.getElementById('pagarTotal')
const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')
const cantidadTotal = document.getElementById('cantidadTotal')

/* Array carrito */
let carrito = [];

/* LocalStorage.getItem */
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* Fetch renderiza productos de stock en el DOM */
const printProductos = async () => {
  const respuesta = await fetch("./json/stock.json");
  const data = await respuesta.json();
  stockProductos = data;
  stockProductos.forEach((producto) => {
    let card = document.createElement("div");
    card.innerHTML = `
         <figure class="card m-2">
               <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
               <p class="card-title">${producto.nombre} </p>
               <p class="card-text">$ ${producto.precio}</p>
               <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
         </figure> `;
    productosWrapper.appendChild(card);
    const boton = document.getElementById(`p${producto.id}`)
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id)
    })
  })
}

printProductos()

/*  Funcion argegar al carrito sumar producto */
const agregarAlCarrito = (productoId) => {
  const item = carrito.find((producto) => producto.id === productoId);
  if (item) {
    function sumar1ACantidad() {
      item.cantidad++;
    }
    sumar1ACantidad();

    function TotalDelCarrito() {
      item.totalPrecio = item.precio * item.cantidad;
    }
    TotalDelCarrito()

    Swal.fire({
      position: 'top',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      title: `${item.nombre} sumado!`,
      imageUrl: `${item.img}`,
      imageHeight: 100,
      imageWidth: 100,
      text: `${item.cantidad}  ${item.nombre}s en el carrito`,
      showConfirmButton: false,
      timer: 2000
    });
/*  Funcion argegar al carrito por primera vez */
  } else {
    let newProducto = stockProductos.find((producto) => producto.id === productoId);
    carrito.push(new Producto(newProducto));
    carrito[carrito.length - 1].TotalDelCarrito()

    Swal.fire({
      position: 'top',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      title: `${newProducto.nombre}`,
      imageUrl: `${newProducto.img}`,
      imageHeight: 100,
      imageWidth: 100,
      text:  "Se agrego correctamente al carrito",
      showConfirmButton: false,
      timer: 2000
    })
  }
  actualizarCarrito()
}

const deleteCart = (productoId) => {
  const item = carrito.find((producto) => producto.id === productoId);
  const index = carrito.indexOf(item);
  carrito.splice(index, 1);
  actualizarCarrito()
}

/*  Vaciar el array del carrito */
vaciarCarrito.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
})

/*  Funcion pagar total del carrito*/
pagarTotal.addEventListener('click', () => {
  Swal.fire({
    title: `Total a pagar : $${totalCarrito} `,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    imageUrl: './imagenes/metodosdepago.png',
    imageHeight: 50,
    confirmButtonText: 'Pagar',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  })
  carrito.length = 0;
  actualizarCarrito()
})

/*  Renderizar productos en carrito */
const actualizarCarrito = () => {
  carritoWrapper.innerHTML = "";
  if (carrito.length === 0) {
    let aviso = document.createElement("div");
    aviso.innerHTML =
      `<p class="carritoVacio"> El carrito de compras está vacío </p>`
    carritoWrapper.appendChild(aviso);
  } else {
    carrito.forEach((producto) => {
      let card = document.createElement("div")
      card.innerHTML = `
    <figure class="card mb-4">
      <div class="row g-0">
          <div class="col-md-3 img-carrito">
              <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
          </div>
          <div class="col-md-6">
             <div class="card-detalle">
                <p class="card-title">${producto.nombre} </p>
                <p class="card-text">Cant: ${producto.cantidad}</p>
                <p class="card-text">Total: $ ${producto.totalPrecio}</p>
             </div>
          </div>
          <div class="col-md-3 d-flex">
                <button class="btn btn-primary eliminar" id="eliminar${producto.id}">Eliminar</button>
          </div>
      </div>
    </figure
    `
      carritoWrapper.appendChild(card);

      const botonDelete = document.getElementById(`eliminar${producto.id}`)
      botonDelete.addEventListener('click', () => {
        deleteCart(producto.id)
      })
    })
  }
  
  /* Guardar en localStorage.setItem el array del carrito */
  localStorage.setItem('carrito', JSON.stringify(carrito))

  productosCounter.innerText = carrito.length

  totalPrecioCarrito.innerText = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
  totalCarrito = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
}

actualizarCarrito()

/* Fin */