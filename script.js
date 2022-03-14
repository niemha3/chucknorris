const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    jokeText.textContent = data.value;
    
}



jokeButton.addEventListener("click", getJoke);