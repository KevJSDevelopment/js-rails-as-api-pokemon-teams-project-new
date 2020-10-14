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
        newFunc(trainer)
    }))
    .catch(error => console.log("Did not work"))
}


function newFunc(trainer) {
    // finding my main and variables needed 
    let myPokemon = trainer.pokemons
    let main = document.querySelector("main")
    let ul = addTeam(myPokemon)
    let div = document.createElement("div")
    let p = document.createElement("p")
    let addButton = document.createElement(`button`)
    

    // adding attri 
    div.setAttribute("data-id", `${trainer.id}`)
    div.classList.add("card")
    div.id = `trainer-${trainer.id}`
    p.innerText = `${trainer.name}`
    addButton.classList.add(trainer.name)
    addButton.setAttribute("data-trainer-id", "1")
    addButton.innerText = `${trainer.name}`

    //appending
    div.appendChild(p)
    div.appendChild(addButton)
    div.append(ul)
    main.appendChild(div)
    
    addButton.addEventListener('click', () => {
        if(trainer.pokemons.length < 6){
            let li = addPokemon(trainer)
            let trainerDiv = document.querySelector(`#trainer-${trainer.id}`)
            console.log(trainerDiv)
            trainerDiv.children[2].appendChild(li)
        }
    })

    
    

}

const addTeam = (pokemon) => {
    let ul = document.createElement("ul")

    pokemon.forEach(pokemon => {
        let button = document.createElement("button")
        button.classList.add("release")
        button.setAttribute("data-pokemon-id", `${pokemon.id}`)
        button.innerText = "Release"
        button.addEventListener("click", () => {
            deleteMe(li, pokemon)
        })
        
        let li = document.createElement("li")
        li.innerText = `${pokemon.nickname} (${pokemon.species})`
        li.appendChild(button)
        ul.append(li)
    })
    return ul

    // 
}

function addPokemon(trainer) {

    let li = document.createElement("li");
    let button = document.createElement("button")
    fetch(TRAINERS_URL + "/" + trainer.id + "/catch_pokemon")
    .then(res => res.json())
    .then(pokemon => {
        button.classList.add("release")
        button.setAttribute("data-pokemon-id", `${pokemon.id}`)
        button.innerText = "Release"
        button.addEventListener("click", () => {
            deleteMe(li, pokemon)
        })
        

            li.innerText = `${pokemon.nickname} (${pokemon.species})`
            li.appendChild(button)
            trainer.pokemons.push(pokemon)
        })

    return li
}

function deleteMe(li, pokemon) {
    meta = {method: "DELETE", 
    headers: {"Content-Type": "application/json"}
    }

    fetch(POKEMONS_URL + "/" + pokemon.id, meta)
    .then(res => console.log(res.json()))
    .then (res => li.remove())
    .catch(failure => {console.log("failure in delete")})
}

