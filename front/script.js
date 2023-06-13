//TMDB 

const API_KEY = 'api_key=4113f3ad734e747a5b463cde8c55de42';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const principal = document.getElementById('principal');


function getPeliculas(API_URL) {

    fetch(url).then(res => res.json()).then(data => {

        mostrarPeliculas(data.results);
    })

}

function mostrarPeliculas(data) {
    principal.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path , overview} = movie;
        const elementoPelicula = document.createElement('div');
        elementoPelicula.classList.add('pelicula');
        elementoPelicula.innerHTML = `
            <h3>${title}</h3>
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <p>${overview}</p>
            <a href="#">Ver más</a>
            <a href="#" class="hyperlink">Ver más</a>
        `

        principal.appendChild(elementoPelicula);
    })
}