import './style/style.css';
import Git from './images/github.png';

document.getElementById("github").src = Git; // Fill github logo

const img = document.querySelector('img');
const search = document.querySelector('#search');
const searchText = document.querySelector('#search-text');
const errorText = document.querySelector('.error');

async function refreshImage() {
    if (searchText.value != "") {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ieAJmBUWM0e91Ng4SxLG3jGYx1SQ2SR7&s=${searchText.value}`, {mode: 'cors'});
            const searchData = await response.json();
            img.src = searchData.data.images.original.url;
        }
        catch (error) {
            errorText.textContent = "Request failed: " + error;
        }
    }
}

const random = document.querySelector('#random');

async function randomImage() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=S5i4qINf2fE0u8djxMDq6OJaNbFmW1ij`, {mode: 'cors'});
    const randomData = await response.json();
    img.src = randomData.data.images.original.url;
}

random.onclick = function(e) {
    searchText.value = "";
    e.preventDefault();
    randomImage().catch((error) => {
        errorText.textContent = "Request failed: " + error;
    });
}

search.onclick = function(e) {
    e.preventDefault();
    refreshImage();
};


