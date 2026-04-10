
const lista = document.querySelector("#lista-carrito");

const botones = document.querySelectorAll(".btn-agregar");


botones.forEach(boton => {
  boton.addEventListener("click", function () {

    const nombre = boton.dataset.nombre;
    const precio = boton.dataset.precio;

    agregarAlCarrito(nombre, precio);
  });
});

function agregarAlCarrito(nombre, precio) {

  const li = document.createElement("li");

  li.innerHTML = `
    ${nombre} - $${precio}
    <button class="btn-eliminar">X</button>
  `;

  lista.appendChild(li);


  const botonEliminar = li.querySelector(".btn-eliminar");

  botonEliminar.addEventListener("click", function () {
    li.remove();
  });
}