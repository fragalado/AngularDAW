function modificaEstilo() {
    let variableBody = document.querySelector('body').classList;
    let variableH1 = document.querySelector('h1').classList;
    let variableH2 = document.querySelector('h2').classList;

    if (variableBody[0] == "bg-primary-subtle") {
        // 1ª forma de hacerlo
        variableBody.remove('bg-primary-subtle');
        variableBody.add('bg-warning');
        variableH1.remove('text-secondary');
        variableH1.add('text-danger');
        // 2ª forma de hacerlo
        variableH2.replace('text-primary-emphasis', 'text-success');
    }
    else {
        variableBody.remove('bg-warning');
        variableBody.add('bg-primary-subtle');
        variableH1.replace('text-danger', 'text-secondary');
        variableH2.replace('text-success', 'text-primary-emphasis');
    }
}

function anyadirContenido() {
    // Creamos el nuevo div
    let div = document.createElement('div');

    // Le anyadimos la clase row
    div.classList.add('row');

    // Bucle para crear los 4 div con las listas
    for (let i = 0; i < 4; i++) {
        let divLista = document.createElement('div');
        divLista.classList.add('col-3') // le anyadimos la clase col-3 de bootstrap
        let ul = document.createElement("ul"); // Creamos el elemento 'ul'

        // Bucle para crear elemento li, anyadir texto en el elemento y anyadirlo al ul
        for (let i = 0; i < 3; i++) {
            let li = document.createElement('li');
            li.innerHTML = "Esto es una prueba " + i;
            ul.appendChild(li)
        }

        // Ya tenemos la lista completa, ahora se la pasamos al divLista
        divLista.appendChild(ul);
        div.appendChild(divLista); // Anyadimos el divLista al div
    }

    // Añadimos el elemento div al container
    let container = document.querySelector('.container');
    container.appendChild(div);

    // Por último cambiamos la función del botón para restaurar/recargar la página
    let boton = document.querySelector("#listas");
    boton.innerText = "Restaurar";
    boton.addEventListener("click", (_) => location.reload());
}