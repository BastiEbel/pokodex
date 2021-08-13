let allPokemons = [];
let renderpokemon;

async function init() {

    for (let i = 1; i < 21; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        renderpokemon = await response.json();
        allPokemons.push(renderpokemon);
    }


    console.log(allPokemons);
    render();
}

function render() {
    let pokemonList = document.getElementById('render-pokemons');
    pokemonList.innerHTML = '';

    for (let i = 0; i < allPokemons.length; i++) {
        let pokemon = allPokemons[i];
        pokemonList.innerHTML += `<div class="pokemon-card"><h3>${pokemon['name']}</h3>
                                <div class="type-of" id="type-of${i}"></div>
                                <div class="container-img"><img class="pokemon-img" src="${pokemon['sprites']['front_shiny']}"></div>
                                </div>`;

        typerender(i);
    }
}

function typerender(i) {
    let pokemon = allPokemons[i];
    let post = document.getElementById(`type-of${i}`);
    post.innerHTML = '';

    for (let j = 0; j < pokemon['types'].length; j++) {
        let currentType = pokemon['types'][j];

        post.innerHTML += `${currentType['type']['name']} <br>`;
    }
}