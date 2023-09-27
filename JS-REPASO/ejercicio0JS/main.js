function holaMundo() {
    // alert("Hola mundo!!");
    let h1 = document.getElementById('titulo'); // Se deberia de poner const
    h1.innerHTML = 'Hola Mundo!!';
    let parrafo = document.createElement('p');
    parrafo.style.backgroundColor = 'blue';
    parrafo.innerText = "Este es un párrafo creado con JavaScript";
    let div = document.querySelector(".nuevos");
    div.appendChild(parrafo);

    // Diferencia entre InnerHTML y InnerText
    let h4 = document.getElementById('innerHTML');
    h4.innerHTML = "Hola <i>mundo</i>";
    let h5 = document.getElementById('innerText');
    h5.innerText = "Hola <i>mundo</i>";
}

function colorea() {
    let parrafos = document.querySelector('.nuevos').querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.style.color = 'white';
    })
}