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
        pokemonList.innerHTML += `<div onclick="showPokemon(${i})" class="pokemon-card"><h3>${pokemon['name']}</h3>
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
        currentType = pokemon['types'][j];

        post.innerHTML += `${currentType['type']['name']} <br>`;
    }
}

function closecontainer() {
    document.getElementById('show-pokemon').classList.add('d-none');
}
//single Pokemon show
function showPokemon(i) {
    let pokemon = allPokemons[i];
    
    document.getElementById('show-pokemon').classList.remove('d-none');
    document.getElementById('show-pokemon').innerHTML = '';
    document.getElementById('show-pokemon').innerHTML += `<div id="show-single-pokemon" class="info-container">
    <div class="pokedex">
            <div class="pokedex-info">
            <h1 id="pokemon-name">${pokemon['name']}</h1>
            <span id="pokemon-index">#00${pokemon['id']}</span>
        </div>
        <div class="type-of-pokemon">
            <span id="type-of${i}">${pokemon['types'][0].type.name}</span>
        </div>
        <div class="img-pokemon">
        <img id="pokemon-pic" src="${pokemon['sprites']['front_shiny']}">
        </div>
    </div>
    <div class="bg-container-stats">
        <div class="container-stats">
            <div class="container-about">
                <a href="">About</a>
            </div>
            <div class="container-base-stats">
                <a href="">Base Stats</a>
            </div>
            <div class="container-evolution">
                <a href="">Evolution</a>
            </div>
            <div class="container-moves">
                <a href="">Moves</a>
            </div>
        </div>
    <div class="">
        <div class="container-species">
            <span class="species">Species:</span>
            <span id="species-name">${pokemon['species']['name']}</span>
        </div>
        <div class="container-species">
            <span class="species">Height</span>
            <span id="species-height">${pokemon['height']}</span>
        </div>
        <div class="container-species">
            <span class="species">Weight</span>
            <span id="species-weight">${pokemon['weight']}</span>
        </div>
        <div class="container-species">
            <span class="species">Abilities</span>
            <span id="species-abilities">${pokemon['abilities'][0].ability.name}<br>${pokemon['abilities'][1].ability.name}</span>
        </div>
    </div>
    </div>
</div>`;
}