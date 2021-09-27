const baseDeDatos = [
    {
        id: 1,
        nombre: 'Manzanas',
        precio: 1,
    },
    {
        id: 2,
        nombre: 'Mandarinas',
        precio: 1.2,
    },
    {
        id: 3,
        nombre: 'Naranjas',
        precio: 2.1,
    },
    {
        id: 4,
        nombre: 'Sandia',
        precio: 0.6,
    }

];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function Mostrarproducto() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const nodo = document.createElement('div');
        nodo.classList.add('card', 'col-sm-4');
        // Body
        const nodoCardBody = document.createElement('div');
        nodoCardBody.classList.add('card-body');
        // Titulo
        const nodotittle = document.createElement('h5');
        nodotittle.classList.add('card-title');
        nodotittle.textContent = info.nombre;
        //Precio
        const nodoprecio = document.createElement('p');
        nodoprecio.classList.add('card-text');
        nodoprecio.textContent = info.precio + '$';
        //Boton 
        const nodoboton = document.createElement('button');
        nodoboton.classList.add('btn', 'btn-primary');
        nodoboton.textContent = '+';
        nodoboton.setAttribute('marcador', info.id);
        nodoboton.addEventListener('click', anyadirProductoAlCarrito);
        //Insercion
        nodoCardBody.appendChild(nodotittle);
        nodoCardBody.appendChild(nodoprecio);
        nodoCardBody.appendChild(nodoboton);
        nodo.appendChild(nodoCardBody);
        DOMitems.appendChild(nodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Añadir el Nodo al carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // calcular el total
    calcularTotal();
    // Actualizacion de los datos del carrito al modificar productos
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
    // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
    // 
            return itemBaseDatos.id === parseInt(item);
        });
        // si el producto es seleccionaod mas de 2 veces, simplemente se acumulara
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    carrito.forEach((item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);


// Inicio
renderizarProductos();


