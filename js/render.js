let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('loadPokemon', currentPokemon);

    renderPokemon();
}

function renderPokemon(currentPokemons) {
    renderHeader();
    
    
    document.getElementById('species-name').innerHTML = currentPokemon['species']['name'];
    document.getElementById('species-height').innerHTML = currentPokemon['height'];
    document.getElementById('species-weight').innerHTML = currentPokemon['weight'];

    for (let i = 0; i < currentPokemon['abilities'].length; i++) {
        const ability = currentPokemon['abilities'][i];
            document.getElementById('species-abilities').innerHTML += `${ability['ability']['name']},  `;
    }
}

function renderHeader() {
    document.getElementById('pokemon-pic').src = currentPokemon['sprites']['front_default'];
    document.getElementById('pokemon-name').innerHTML = currentPokemon['name'];
    currentPokemons = document.getElementById('pokemon-index');
    currentPokemons.innerHTML += `#00${currentPokemon['id']}`; 
    
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        const speciestype = currentPokemon['types'][j];
        document.getElementById('pokemon-type').innerHTML += `${speciestype['type']['name']}`;
    }
}