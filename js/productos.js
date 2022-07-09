/* fetch con await / renderizar productos en el DOM */

const pedirDatos = async () => {
  const respuesta = await fetch("./json/data.json");
  const stock = await respuesta.json();
/*   return stock */

  stock.forEach((producto) => {
    let card = document.createElement("div");
    card.innerHTML =  `
    <figure class=" productos__card card m-2">
          <img src="${producto.image}" class="card-img-top">
          <p class="card-title">${producto.nombre} </p>
          <p class="card-text">$ ${producto.precio}</p>
          <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
    </figure> 
    `;
    contenedorProductos.appendChild(card);

    const boton = document.getElementById(`p${producto.id}`)
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id)
    })
  });
};

pedirDatos();

/* constructor clase Producto */

class Producto {
    constructor(id, nombre, precio, img) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.cantidad = 1;
      this.enCarrito = false;
    }
    sumarProducto() {
      this.cantidad++;
      this.enCarrito = true;
    }
    actualizarPrecioTotal() {
      this.totalPrecio = this.precio * this.cantidad;
    }
  }

// array de stock de productos
const prueba = async () => {
    const stock1 = await pedirDatos();

    stock1 = stock1.map( elemento => {
      return new Producto (
        elemento.id,
        elemento.nombre,
        elemento.precio,
        elemento.image,
        elemento.cantidad,
        elemento.enCarrito
        )
    })
}

/* console.log(stock1); */

//Productos disponibles en la tienda
/* stock1.push(new Producto(${producto.id}));
stock1.push(new Producto("2", "Harina", 15, './imagenes/harina.png'));
stock1.push(new Producto("3", "Huevo", 70, './imagenes/huevo.png'));
stock1.push(new Producto("4", "Cereal", 80, './imagenes/cereal.png'));
stock1.push(new Producto("5", "Avena", 10, './imagenes/gachas-de-avena.png'));
stock1.push(new Producto("6", "Cafe", 150, './imagenes/bolsa-de-cafe.png'));
stock1.push(new Producto("7", "Hielos", 50, './imagenes/caja-de-hielo.png'));
stock1.push(new Producto("8", "Chocolate", 30, './imagenes/barra-de-chocolate.png'));
stock1.push(new Producto("9", "Pastel", 290, './imagenes/cup-cake.png'));
stock1.push(new Producto("10", "Pasta", 110, './imagenes/spaguetti.png'));
stock1.push(new Producto("11", "Galletas", 25, './imagenes/horneando.png')); */

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


  

// Funcion argegar al carrito

const agregarAlCarrito = (productoId) => {
  const item = carrito.find((producto) => producto.id === productoId);
  if (item) {
    let index = carrito.findIndex((producto) => producto.id === item.id);
    carrito[index].sumarProducto();
    carrito[index].actualizarPrecioTotal();
  } else {
    let newProducto = stock1.find((producto) => producto.id === productoId);
    carrito.push(newProducto);
    carrito[carrito.length - 1].actualizarPrecioTotal();

  }
  
  actualizarCarrito()
}

/* Elinimar producto */

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

  /* funcion actualizar carrito */
  
  const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
  
    carrito.forEach((producto) => {
      let card = document.createElement("div")
      card.innerHTML = `
      <figure class="card mb-4">
        <div class="row g-0">
            <div class="col-md-3 img-carrito">
                <img src="${producto.image}" class="img-fluid rounded-start" alt="${producto.nombre}">
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

  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito') ) {
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
    }
  })

