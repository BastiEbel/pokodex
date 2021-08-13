let allPokemons = [];
let renderpokemons;

async function init() {

    for (let i = 1; i < 21; i++) {

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        renderpokemons = await response.json();
        allPokemons.push(renderpokemons);
    }


    console.log(renderpokemons);
    render();
}

function render() {
    let pokemon = document.getElementById('render-pokemons');
    pokemon.innerHTML = '';

    for (let i = 0; i < allPokemons.length; i++) {
        let pokemons = allPokemons[i];

        pokemon.innerHTML += `<div class="pokemon-card"><h3>${pokemons['name']}</h3>
                                <div></div>
                                </div>`;
    }
}