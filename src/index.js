import './style/style.css';
import Git from './images/github.png';

document.getElementById("github").src = Git; // Fill github logo

const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/random?api_key=ieAJmBUWM0e91Ng4SxLG3jGYx1SQ2SR7', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
    });