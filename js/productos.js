/* constructor clase Producto */

class Producto {
    constructor(id, nombre, precio, img) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.cantidad = 1;
      this.inPortfolio = false;
    }
    addToPorfolio() {
      this.cantidad++;
      this.inPortfolio = true;
    }
    actualizarPrecioTotal() {
      this.totalPrecio = this.precio * this.cantidad;
    }
  }

// array de stock de productos
const stockProductos = [];

//Pusheo los productos al Stock
stockProductos.push(new Producto("01", "Leche", 20, './imagenes/caja-de-leche.png'));
stockProductos.push(new Producto("02", "Harina", 15, './imagenes/harina.png'));
stockProductos.push(new Producto("03", "Huevo", 70, './imagenes/huevo.png'));
stockProductos.push(new Producto("04", "Cereal", 80, './imagenes/cereal.png'));
stockProductos.push(new Producto("05", "Avena", 10, './imagenes/gachas-de-avena.png'));
stockProductos.push(new Producto("06", "Cafe", 150, './imagenes/bolsa-de-cafe.png'));
stockProductos.push(new Producto("07", "Hielos", 50, './imagenes/caja-de-hielo.png'));
stockProductos.push(new Producto("08", "Chocolate", 30, './imagenes/barra-de-chocolate.png'));
stockProductos.push(new Producto("09", "Pastel", 290, './imagenes/cup-cake.png'));
stockProductos.push(new Producto("10", "Pasta", 110, './imagenes/spaguetti.png'));
stockProductos.push(new Producto("11", "Galletas", 25, './imagenes/horneando.png'));

/* declaracion constantes getElementById */
const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorCarrito = document.getElementById('contadorCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')
const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')
const cantidadTotal = document.getElementById('cantidadTotal')

/* Array Carrito */
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

/* Crear productos en el DOM */

stockProductos.forEach((producto) => {
  let card = document.createElement("div")
  card.innerHTML = `
  <figure class="card m-2">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <p class="card-title">${producto.nombre} </p>
        <p class="card-text">$ ${producto.precio}</p>
        <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
  </figure> 
  `
  contenedorProductos.appendChild(card);

  const boton = document.getElementById(`p${producto.id}`)
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id)
  })

})

// Funcion argegar al carrito

const agregarAlCarrito = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId);
    if (item) {
      let index = carrito.findIndex((producto) => producto.id === item.id);
      carrito[index].addToPorfolio();
      carrito[index].actualizarPrecioTotal();
    } else {
      let newProducto = stockProductos.find((producto) => producto.id === productoId);
      carrito.push(newProducto);
      carrito[carrito.length - 1].actualizarPrecioTotal();
  
    }
    actualizarCarrito()
  }
  
  const deleteCart = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId);
    const index = carrito.indexOf(item);
    carrito.splice(index, 1);
    actualizarCarrito()
  }

  // Funcion vaciar al carrito
  
  vaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
  })
  
  // Funcion pagar carrito
  pagarCarrito.addEventListener('click', () => {
    alert(`Tu compra total es de $${totalCarrito}. Gracias!`);
    carrito.length = 0;
    actualizarCarrito()
  })
  
  const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
  
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
                  <p class="card-text">Cantidad: ${producto.cantidad}</p>
                  <p class="card-text">Total: $ ${producto.totalPrecio}</p>
               </div>   
            </div>
            <div class="col-md-3 d-flex">
                  <button class="btn btn-primary eliminar" id="eliminar${producto.id}">Eliminar</button>
            </div>
        </div>
      </figure  
      `
  
      contenedorCarrito.appendChild(card);
  
      const botonDelete = document.getElementById(`eliminar${producto.id}`)
      botonDelete.addEventListener('click', () => {
        deleteCart(producto.id)
      })
    })

    // Funcion localStorage
  
    localStorage.setItem('carrito', JSON.stringify(carrito))
  
    contadorCarrito.innerText = carrito.length
  
    totalPrecioCarrito.innerText = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
    totalCarrito = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
  }
