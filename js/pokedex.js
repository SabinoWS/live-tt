async function botaoBuscar() {
    const pokemon = await buscarPokemon()
    montarVisor(pokemon)
    montarNome(pokemon)
    montarTipos(pokemon)
}

async function buscarPokemon() {
    const idPokemon = document.getElementById("idPokemon").value
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    return await response.json()
}

function montarNome(pokemon) {
    const elementoNome = document.getElementById("name")
    elementoNome.innerHTML = `#${pokemon.id} - ${pokemon.name}`
}

function montarVisor(pokemon) {
    const elementoVisor = document.getElementById("screen")
    elementoVisor.innerHTML =
        `<img src="${pokemon.sprites.front_default}" alt="">`
}

function montarTipos(pokemon) {
    const elementoTipos = document.getElementById("types")
    elementoTipos.innerHTML = ""

    pokemon.types.forEach(tipo => {
        elementoTipos.innerHTML += `
            <span class="type ${tipo.type.name}">${tipo.type.name}</span>
        `
    });
}