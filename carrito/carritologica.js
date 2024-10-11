const obtenerProductos = async(url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`ERROR: ${res.ok}`);
    }
    
    const data = await res.json();
    mostrarProductos(data);

  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('peticion finalizada');
  }
}


const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById('prodContainer');
  contenedorProductos.innerHTML = "";

  productos.forEach((prod) => {
    const card = document.createElement('div');
    card.classList.add('tarjeta-producto')

    card.innerHTML = `
      <img class="prod-img" src="${prod.img}" alt="${prod.nombre}"/>
      <div class="prod-description">
        <h5 class="obra-nombre">${prod.nombre}</h5>
        <h5 class="obra-autor">${prod.autor}</h5>
        <button id="${prod.id}" class="btn-agregar-carrito btn-buy">Agregar al carrito</button>
      </div>
    `;
    
    contenedorProductos.appendChild(card);
    const botonCompra = document.getElementById(`${prod.id}`);
    botonCompra.addEventListener('click', agregarAlCarrito);
  });
}

const agregarAlCarrito = (e) => {
  const id = e.target.id;

  console.log(id);
  
}



obtenerProductos("data.json");