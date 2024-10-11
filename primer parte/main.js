/* 

function saludar(){
  alert("hola como estás");
}

console.g('hola mundo');

const parrafoDOM = document.getElementById('parrafo');
console.log(parrafoDOM);

parrafoDOM.innerText = "Ahora escribo otra cosa";

saludar();

function multiplicar(n1,n2){
  return n1 * n2;
}

function calcularPotenciaCuadrada(N){
  const numeroAlCuadrado = multiplicar(N,N);

  console.log(numeroAlCuadrado);
}

calcularPotenciaCuadrada(5);
*/



//setTimeout(funcion, tiempo);
/* 
const saludar = () => {
  console.log('hola');
}
const tiempo = 2000;
//setTimeout(saludar, tiempo);

const intervaloSaludo = setInterval(saludar, tiempo);

setTimeout(()=>{
  clearInterval(intervaloSaludo);
}, 6000);
*/
/* 
let contador = 0;

const intervaloContador = setInterval(contar, 1000);

function contar(){
  contador++;
  console.log("Contador: " + contador);
  // Detener el intervalo después de 5 repes;
  if(contador === 5){
    clearInterval(intervaloContador)
  }
}
*/


/* 

promesas: pending
          fulfilled
          rejected

*/

//console.log(fetch('https://jsonplaceholder.typicode.com/posts'));

const url = "https://jsonplaceholder.typicode.com/posts";

const obtenerPostsUsuarios = async (URL) => {

  try{
    const respuesta = await fetch(URL);
    
    if(!respuesta.ok){
      throw new Error(`ERROR: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    console.log(datos);

    mostrarPosteos(datos);

  } catch (error){
    console.error('El error es: ', error.message);
  } finally {
    console.log('terminé la petición');
  };
}


obtenerPostsUsuarios(url);


function mostrarPosteos(posteos){
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = "";

  posteos.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h2 class="rojo">${post.title}</h2>
      <p>${post.body}</p>
      <small>Usuario ID: ${post.userId}</small>
    `;

    postsContainer.appendChild(postElement);
  });
}








/* async function obtenerProductos() {
  try {
    // Petición GET a la API
    const respuesta = await fetch('data.json');

    // Verificamos si la respuesta fue exitosa
    if (!respuesta.ok) {
      throw new Error("Error al obtener los productos");
    }

    // Convertimos la respuesta en JSON
    const productos = await respuesta.json();

    // Llamamos a la función para mostrarlos en el DOM
    mostrarProductos(productos);

  } catch (error) {
    console.error("Se produjo un error:", error.message);
  }
}

// Función para mostrar los posteos en el DOM
function mostrarProductos(productos) {
  const prodContainer = document.getElementById("prodContainer");
  prodContainer.innerHTML = ''; // Limpiamos el contenedor por si hay contenido previo

  // Iteramos sobre los posteos y los mostramos en el DOM
  productos.forEach((prod) => {
    const prodElement = document.createElement("div");
    prodElement.classList.add('borde');
    

    prodElement.innerHTML = `
      <img class="prod-img" src="${prod.img}" alt="${prod.nombre}"/>
      <div class="prod-description">
        <h5 class="obra-nombre">${prod.nombre}</h5>
        <h5 class="obra-autor">${prod.autor}</h5>
        <button id="${prod.id}" class="btn-agregar-carrito">Agregar al carrito</button>
      </div>
    `;

    // Añadimos ev click
    const botonAgregar = prodElement.querySelector('.btn-agregar-carrito');
    botonAgregar.addEventListener('click', agregarAlCarrito);
    prodContainer.appendChild(prodElement); // Añadimos cada post al contenedor
  });
}
// Llamamos a la función para obtener los posteos cuando la página carga
obtenerProductos();

const agregarAlCarrito = (e) =>{

  const idProducto = e.target.id;
  console.log(idProducto);
  
}  */