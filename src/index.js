import './style/style.css';
import Git from './images/github.png';

document.getElementById("github").src = Git; // Fill github logo

const img = document.querySelector('img');
const search = document.querySelector('#search');
const searchText = document.querySelector('#search-text');
const errorText = document.querySelector('.error');

function refreshImage() {
    if (searchText.value != "") {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ieAJmBUWM0e91Ng4SxLG3jGYx1SQ2SR7&s=${searchText.value}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
        .catch(function(error) {
            errorText.textContent = "Request failed: " + error;
        });
    }
}

const random = document.querySelector('#random');

function randomImage() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=S5i4qINf2fE0u8djxMDq6OJaNbFmW1ij`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
        .catch(function(error) {
            errorText.textContent = "Request failed: " + error;
        });
}

random.onclick = function(e) {
    searchText.value = "";
    e.preventDefault();
    randomImage();
}

search.onclick = function(e) {
    e.preventDefault();
    refreshImage();
};


