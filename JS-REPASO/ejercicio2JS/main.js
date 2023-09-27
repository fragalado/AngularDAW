// Asignar al cargar la página las funciones correspondientes a cada elemento del menú
// Solo lo voy a poner para los alumnos y los profesores
window.addEventListener("load", () =>{
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

    // Mostrar con lista de bootstrap los alumnos de la lista
    // Tenemos que coger la tercera fila, luego:
    let fila = document.querySelector(".col-8");

    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    listaAlumnos.forEach( aux => {
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
}

function verProfesores() {
    // Array de 4 profesores
    let listaProfesores = ["Alfonso", "Sofia", "Maria", "Manolo"];

    // Mostrar con lista de bootstrap los profesores de la lista
    // Tenemos que coger la tercera fila, luego:
    let fila = document.querySelectorAll(".row")[2];
    
    // Ahora tenemos que coger el primer div
    let primerDiv = fila.querySelector(".col-8");

    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    listaProfesores.forEach( aux => {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.classList = "list-group-item";

        // Añadimos el nombre de la lista
        li.innerText = aux;

        // Lo añadimos al elemento ul
        ul.appendChild(li);
    });

    // Añadimos la lista creada al div
    primerDiv.appendChild(ul);
}

function verCursos() {
    // Array de 5 cursos
    let listaCursos = ["1º ESO", "1º Bachillerato", "2º Bachillerato", "4º ESO", "3º ESO"];
    // Mostrar con lista de bootstrap los cursos de la lista
    // Tenemos que coger la tercera fila, luego:
    let fila = document.querySelectorAll(".row")[2];
    
    // Ahora tenemos que coger el primer div
    let primerDiv = fila.querySelector(".col-8");

    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    listaCursos.forEach( aux => {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.classList = "list-group-item";

        // Añadimos el nombre de la lista
        li.innerText = aux;

        // Lo añadimos al elemento ul
        ul.appendChild(li);
    });

    // Añadimos la lista creada al div
    primerDiv.appendChild(ul);
}

function verPersonal() {
    // Array de 3 nombres de personal
    // Mostrar con lista de bootstrap los nombres de la lista
}

function avanzado(lista){
    // Tenemos que coger la tercera fila, luego:
    let fila = document.querySelectorAll(".row")[2];
    
    // Ahora tenemos que coger el primer div
    let primerDiv = fila.querySelector(".col-8");

    // Mostramos ahora en una lista desordenada los nombre de la listaAlumnos
    // Primero creamos un elemento ul
    let ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorremos la lista y creamos los elementos li para despues añadirlo a ul
    lista.forEach( aux => {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.classList = "list-group-item";

        // Añadimos el nombre de la lista
        li.innerText = aux;

        // Lo añadimos al elemento ul
        ul.appendChild(li);
    });

    // Añadimos la lista creada al div
    primerDiv.appendChild(ul);
}