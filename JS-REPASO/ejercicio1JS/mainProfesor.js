// Para no usar onclick en button
window.addEventListener("load", () => {
  document.querySelectorAll('button')[0].addEventListener("click", cambiaColores);
  document.querySelectorAll('button')[1].addEventListener("click", addListas);
}) 


cambioEstilos = false;
function cambiaColores() {
  let body = document.querySelector("body");
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  if (!cambioEstilos) {
    body.classList = "bg-secondary-subtle";
    h1.classList = "text-center text-primary-emphasis";
    h2.classList = "p-3 text-center text-secondary border-bottom border-white";
    cambioEstilos = true;
  } else {
    body.classList = "bg-primary-subtle";
    h1.classList = "text-center text-secondary";
    h2.classList = "p-3 text-center text-primary-emphasis border-bottom border-dark-subtle";
    cambioEstilos = false;
  }
}

function addListas() {
  let listas = [
    [10345, 23430, 30078],
    ["Tomates", "Peras", "Cebollas"],
    ["Perico", "Aurelio", "Boromir", "Witiza"],
    [300, 324, 345],
  ];
  // Cojo el container para poder añadirle después la fila, las columnas con listas
  let container = document.querySelector(".container");
  // Recorro el array de dos dimensiones creando las listas
  // Primero creo la fila
  let fila = document.createElement("div");
  // Le añado las clases correspondientes
  fila.classList = "row bg-info-subtle";
  //Le añadimos un div col por cada lista (son 4)
  listas.forEach((lista) => {
    // Por cada lista creo un div
    var divCol = document.createElement("div");
    divCol.classList = "col";
    // le añadimos el ul
    let ul = document.createElement("ul");
    // Pero antes creo los li correspondientes
    lista.forEach((elemento) => {
      let li = document.createElement("li");
      li.innerText = elemento;
      ul.appendChild(li);
    });
    // Ya tenemos la lista completa, la pasamos al div
    divCol.appendChild(ul);
    // Añadimos el divCol a la fila
    fila.appendChild(divCol);
  });
  // Añadimos la nueva fila al container
  container.appendChild(fila);
  // Por último cambiamos la función del botón para restaurar
  let boton = document.querySelector("#listas");
  boton.innerText = "Restaurar";
  boton.addEventListener("click", (_) => location.reload());
}


