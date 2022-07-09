
/* Fetch con .then */


/* const lista = document.querySelector("#listado");
 */
/* fetch("./json/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `;

      lista.append(li);
    });
  }); */


  /* fetch con await */

/*   const contenedorProductos = document.getElementById("contenedor-productos")
 
  const pedirDatos = async () => {
  const respuesta = await fetch("./json/data.json");
  const data = await respuesta.json();

  data.forEach((producto) => {
    const card = document.createElement("div");
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

 */
