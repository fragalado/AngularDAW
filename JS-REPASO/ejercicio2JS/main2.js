let creado = false; // Variable para saber si se han creado las listas

// Asignar al cargar la página las funciones correspondientes a cada elemento del menú
// Solo lo voy a poner para los alumnos y los profesores
window.addEventListener("load", () => {
    document.querySelectorAll(".col")[0].addEventListener("click", verAlumnos);
    document.querySelectorAll(".col")[2].addEventListener("click", verProfesores);
})

// Funciones
// Versión básica: crear una función para cada elemento del menú
// Versión avanzada: crear una sola función cambiando el parámetro (que será la lista correspoondiente)

// Ver Alumnos
function verAlumnos() {
    // Array de 5 alumnos
    let listaAlumnos = ["Francisco", "Pepe", "Jose", "Gallego", "Dorado"];

    // Tenemos que coger de la tercera fila, el primer div, luego:
    let fila = document.querySelector(".col-8"); // Usamos la clase col-8

    // Mostrar con lista de bootstrap los alumnos de la lista
    if (creado) {
        // Cogemos el ul creado
        let ul = document.querySelector("ul");

        // Borramos los li del ul
        ul.querySelectorAll("li").forEach(aux => {
            ul.removeChild(aux);
        })

        console.log("Se ha borrado");
    }

    // Si no se ha creado todavia la lista:
    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    listaAlumnos.forEach(aux => {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.classList = "list-group-item";

        // Añadimos el nombre de la lista
        li.innerText = aux;

        // Lo añadimos al elemento ul
        ul.appendChild(li);
    });

    // Añadimos la lista creada al div
    fila.appendChild(ul);

    // Cambiamos la variable creado
    creado = true;
}

function verProfesores() {
    // Array de 4 profesores
    let listaProfesores = ["Alfonso", "Sofia", "Maria", "Manolo"];

    // Tenemos que coger de la tercera fila, el primer div, luego:
    let fila = document.querySelector(".col-8"); // Usamos la clase col-8

    // Mostrar con lista de bootstrap los alumnos de la lista
    if (creado) {
        // Cogemos el ul creado
        let ul = document.querySelector("ul");

        // Borramos los li del ul
        ul.querySelectorAll("li").forEach(aux => {
            ul.removeChild(aux);
        })
        console.log("Se ha borrado");
    }

    // Si no se ha creado todavia la lista:
    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    listaProfesores.forEach(aux => {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.classList = "list-group-item";

        // Añadimos el nombre de la lista
        li.innerText = aux;

        // Lo añadimos al elemento ul
        ul.appendChild(li);
    });

    // Añadimos la lista creada al div
    fila.appendChild(ul);

    // Cambiamos la variable creado
    creado = true;
}

function verCursos() {
    // Array de 5 cursos
    let listaCursos = ["1º ESO", "1º Bachillerato", "2º Bachillerato", "4º ESO", "3º ESO"];
    // Tenemos que coger de la tercera fila, el primer div, luego:
    let fila = document.querySelector(".col-8"); // Usamos la clase col-8

    // Mostrar con lista de bootstrap los alumnos de la lista
    if (creado) {
        // Cogemos el ul creado
        let ul = document.querySelector("ul");

        // Borramos los li del ul
        ul.querySelectorAll("li").forEach(aux => {
            ul.removeChild(aux);
        })
        console.log("Se ha borrado");
    }

    // Si no se ha creado todavia la lista:
    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    listaCursos.forEach(aux => {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.classList = "list-group-item";

        // Añadimos el nombre de la lista
        li.innerText = aux;

        // Lo añadimos al elemento ul
        ul.appendChild(li);
    });

    // Añadimos la lista creada al div
    fila.appendChild(ul);

    // Cambiamos la variable creado
    creado = true;
}

function verPersonal() {
    // Array de 3 nombres de personal
    // Mostrar con lista de bootstrap los nombres de la lista
}

function avanzado(lista) {

    // Tenemos que coger de la tercera fila, el primer div, luego:
    let fila = document.querySelector(".col-8"); // Usamos la clase col-8

    // Mostrar con lista de bootstrap los alumnos de la lista
    if (creado) {
        // Cogemos el ul creado
        let ul = document.querySelector("ul");

        // Borramos los li del ul
        ul.querySelectorAll("li").forEach(aux => {
            ul.removeChild(aux);
        })
        console.log("Se ha borrado");
    }

    // Si no se ha creado todavia la lista:
    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    lista.forEach(aux => {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.classList = "list-group-item";

        // Añadimos el nombre de la lista
        li.innerText = aux;

        // Lo añadimos al elemento ul
        ul.appendChild(li);
    });

    // Añadimos la lista creada al div
    fila.appendChild(ul);

    // Cambiamos la variable creado
    creado = true;
}