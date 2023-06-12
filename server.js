const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWU1NTJiOWIyNTU2MTI4M2JiMDQ2YWExMzQyYjYyMCIsInN1YiI6IjYyNjg4ZDQ1MTk2NzU3MDA1MWExZTc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A1SJupHj4he2VF1bOSQNTIIxrFtE_8KVsaXvlOC0sHs";

const obtenerPelicula = async (titulo) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(titulo)}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al obtener la película:", error);
  }
};