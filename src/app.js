import { db } from './db.js';

//Selector comuna
const comuna = document.querySelector('#comuna');

const url = JSON.stringify(db);
const data = JSON.parse(url);

document.addEventListener('DOMContentLoaded', () => {
    getData();
})

// Se llama a la lista de productos usando fetch

function getData() {
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
    });
}

function mostrarData(data){
    limpiarHTML();
    const contenedor = document.querySelector('#resultado');

    // Se crea HTML que muestra los resultados
    data.forEach(info => {
        const pharmaHTML = document.createElement('p');
        pharmaHTML.innerHTML = `
            <p> Nombre local: ${info.local_nombre} - Dirección: ${info.local_direccion} - Teléfono: ${info.local_telefono} Latitud: ${info.local_lat} - Longitud: ${info.local_lng}</p>
        `;
        contenedor.appendChild(pharmaHTML);
    })
}

// Dato búsqueda
const datosBusqueda = {
    fk_comuna : ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarData(data);
});

// Eventos para el formulario
comuna.addEventListener('input', e => {
    datosBusqueda.fk_comuna = e.target.value;

    // Se llama a función para filtrar datos
    filtrarData();
});

function limpiarHTML() {
    const contenedor = document.querySelector('#resultado');

    // Se limpian los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}


function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

//Función para filtrar

export const filtrarData = () => {
   const resultado = data.filter(filtrarComuna);
   if(resultado.length){
        mostrarData(resultado);
   } else {
       noResultado();
   }
}

// Se aplican los filtros
function filtrarComuna(data) {
    if(datosBusqueda.fk_comuna){
        return data.fk_comuna === datosBusqueda.fk_comuna;
    } 
    return data;
}
