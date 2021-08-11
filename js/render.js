let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('loadPokemon', currentPokemon);

    renderPokemon();
}

function renderPokemon() {
    document.getElementById('pokemon-name').innerHTML = currentPokemon['name'];
    document.getElementById('pokemon-pic').src = currentPokemon['sprites']['front_default'];
}