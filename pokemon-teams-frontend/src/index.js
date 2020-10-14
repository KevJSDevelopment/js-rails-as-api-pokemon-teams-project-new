const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {
    fetching()
})

function fetching() {
    fetch("http://localhost:3000/trainers")
    .then(resp => resp.json())
    .then(trainers => trainers.forEach(trainer => {
        addTrainer(trainer)
    }))
    .catch(error => console.log("Did not work"))
}

const addTrainer = (trainer) => {
    let myPokemon = trainer.pokemons
    console.log(myPokemon)
    let main = document.querySelector("main")
    let ul = addPokemon(myPokemon)
    main.innerHTML += `<div class="card" data-id="${trainer.id}" id="trainer-${trainer.id}"><p>${trainer.name}</p>
                        <button data-trainer-id="1" id="button-${trainer.id}">Add Pokemon</button>
                       </div>`
    let addButton = document.querySelector(`#button-${trainer.id}`)
    addButton.addEventListener('click', () => {
        
    })
    let div = document.querySelector(`#trainer-${trainer.id}`)
    div.append(ul)
}

const addPokemon = (pokemon) => {
    let ul = document.createElement("ul")
    pokemon.forEach(pokemon => {
        let li = document.createElement("li")
        li.innerHTML = `${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>`
        ul.append(li)
    })
    return ul
}

