let cantidadItems = 0;
let totalAcumulado = 0;

const botones = document.querySelectorAll('.btn-agregar');
const lista = document.querySelector('#lista-carrito');
const badge = document.querySelector('#badge');
const total = document.querySelector('#total');
const btnVaciar = document.querySelector('#btn-vaciar');
const btnComprar = document.querySelector('#btn-comprar');
const mensajeVacio = document.querySelector('#msg-vacio');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const nombre = boton.dataset.nombre;
    const precio = parseFloat(boton.dataset.precio);

    agregarAlCarrito(nombre, precio);
  });
});


function agregarAlCarrito(nombre, precio) {

  mensajeVacio.style.display = "none";

  const li = document.createElement('li');
  li.classList.add('list-group-item');

  li.innerHTML = `
    ${nombre} - $${precio.toLocaleString('es-CO')}
    <button class="btn-eliminar">✕</button>
  `;

  lista.appendChild(li);

  cantidadItems++;
  totalAcumulado += precio;

  updateBadge();
  updateTotal();

  const btnEliminar = li.querySelector('.btn-eliminar');
  btnEliminar.addEventListener('click', () => {
    eliminarItem(li, precio);
  });
}

function eliminarItem(li, precio) {
  li.remove();

  cantidadItems--;
  totalAcumulado -= precio;

  updateBadge();
  updateTotal();

  if (cantidadItems === 0) {
    mensajeVacio.style.display = "block";
  }
}

function updateBadge() {
  badge.textContent = cantidadItems;
}

function updateTotal() {
  total.textContent =
    '$' + totalAcumulado.toLocaleString('es-CO', {
      minimumFractionDigits: 2
    });
}

btnVaciar.addEventListener('click', () => {

  lista.querySelectorAll('li:not(#msg-vacio)').forEach(li => li.remove());

  cantidadItems = 0;
  totalAcumulado = 0;

  updateBadge();
  updateTotal();

  mensajeVacio.style.display = "block";
});


btnComprar.addEventListener('click', () => {

  if (cantidadItems === 0) {
    alert('Tu carrito está vacío');
    return;
  }

  alert('¡Compra realizada con éxito!');


  lista.querySelectorAll('li:not(#msg-vacio)').forEach(li => li.remove());

  cantidadItems = 0;
  totalAcumulado = 0;

  updateBadge();
  updateTotal();

  mensajeVacio.style.display = "block";
});