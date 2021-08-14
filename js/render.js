let allPokemons = [];
let renderpokemon;
let pokemon;

async function init() {

    for (let i = 1; i < 21; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        renderpokemon = await response.json();
        allPokemons.push(renderpokemon);
    }


    console.log(allPokemons);
    render();
}

function searchPokemon() {
    let pokemonList = document.getElementById('render-pokemons');
    pokemonList.innerHTML = '';

    let searchname = document.getElementById('search-input').value;
    searchname = searchname.toLowerCase();
    console.log(searchname);
    
    if (!document.getElementById('search-input').value) {
        render();
    } else {
        for (let i = 0; i < allPokemons.length; i++) {
            pokemon = allPokemons[i];

            if (pokemon['name'].toLowerCase().includes(searchname)) {
                pokemonList.innerHTML += `<div onclick="showPokemon(${i})" class="pokemon-card"><h3>${pokemon['name']}</h3>
                                    <div class="type-of" id="type-of${i}"></div>
                                    <div class="container-img"><img class="pokemon-img" src="${pokemon['sprites']['front_shiny']}"></div>
                                    </div>`;
                typerender(i);
            }
        }
    }

}

function render() {
    let pokemonList = document.getElementById('render-pokemons');
    pokemonList.innerHTML = '';

    for (let i = 0; i < allPokemons.length; i++) {
        pokemon = allPokemons[i];
        pokemonList.innerHTML += `<div onclick="showPokemon(${i})" class="pokemon-card"><h3>${pokemon['name']}</h3>
                                <div class="type-of" id="type-of${i}"></div>
                                <div class="container-img"><img class="pokemon-img" src="${pokemon['sprites']['front_shiny']}"></div>
                                </div>`;

        typerender(i);
    }
}
//for loop for element types
function typerender(i) {
    pokemon = allPokemons[i];
    let post = document.getElementById(`type-of${i}`);
    post.innerHTML = '';

    for (let j = 0; j < pokemon['types'].length; j++) {
        currentType = pokemon['types'][j];

        post.innerHTML += `${currentType['type']['name']} <br>`;
    }
}

//close single Pokemon show
function closecontainer() {
    document.getElementById('show-pokemon').classList.add('d-none');
}
//single Pokemon show
function showPokemon(i) {
    pokemon = allPokemons[i];

    document.getElementById('show-pokemon').classList.remove('d-none');

    document.getElementById('show-pokemon').innerHTML = '';
    document.getElementById('show-pokemon').innerHTML += `<div id="show-single-pokemon" class="info-container">
    <div class="pokedex">
            <img onclick="closecontainer()" class="x-mark" src="img/x-mark.png">
            <div class="pokedex-info">
            <h1 id="pokemon-name">${pokemon['name']}</h1>
            <span id="pokemon-index">#00${pokemon['id']}</span>
        </div>
        <div class="container-arrow">
        <img onclick="switchleft(${i})" class="arrow" src="img/arrow-left.png">
        <img onclick="switchright(${i})" class="arrow" src="img/arrow-right.png">
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
            <span onclick="showPokemon(${i})" class="container-about"> About </span>
            <span onclick="basestats(${i})" class="container-about"> Base Stats </span>
            <span onclick="Evolution(${i})" class="container-about"> Evolution </span>
            <span onclick="Moves(${i})" class="container-about"> Moves </span>
        </div>
    <div id="base-stats">
        <div id="switchstats" class="container-species">
            <span class="species">Species:</span>
            <span id="species-name">${pokemon['species']['name']}</span>
        </div>
        <div id="switchstats" class="container-species">
            <span class="species">Height</span>
            <span id="species-height">${pokemon['height']}</span>
        </div>
        <div id="switchstats" class="container-species">
            <span class="species">Weight</span>
            <span id="species-weight">${pokemon['weight']}</span>
        </div>
        <div id="switchstats" class="container-species">
            <span class="species">Abilities</span>
            <span id="species-abilities">${pokemon['abilities'][0].ability.name}</span>
        </div>
    </div>
    </div>
</div>`;
}

function switchleft(i) {
    if (i > 0) {
        i--;
    }

    showPokemon(i);
}

function switchright(i) {
    if (i < allPokemons.length - 1) {
        i++;
    }

    showPokemon(i);
}

function basestats(i) {
    pokemon = allPokemons[i];

    let pokemonList = document.getElementById('base-stats');
    pokemonList.innerHTML = '';

    for (let i = 0; i < pokemon['stats'].length; i++) {
        let currentStat = pokemon['stats'][i];

        pokemonList.innerHTML += `<div id="base-stats" class="container-species">
        <span class="species">${currentStat['stat']['name']}:</span>
        <span id="stat-number">${currentStat['base_stat']}</span>
    </div>`;
    }
}

function Evolution(i) {
    pokemon = allPokemons[i];

    let pokemonList = document.getElementById('base-stats');
    pokemonList.innerHTML = '';

    pokemonList.innerHTML += `<div id="base-stats" class="container-species">
        <span class="species">Keine Information vorhanden!!!</span> </div>`;
}

function Moves(i) {
    pokemon = allPokemons[i];

    let pokemonList = document.getElementById('base-stats');
    pokemonList.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        let currentStat = pokemon['moves'][i];

        pokemonList.innerHTML += `<div id="base-stats" class="container-species">
        <span class="species">${currentStat['move']['name']}:</span>
        <span id="stat-number${i}">${currentStat['version_group_details'][0]['version_group']['name']}</span>
    </div>`;
    }
}