const movie = [
    "Dune: Part Two",
    "Inside Out 2",
    "Mad Max",
    "Deadpool",
    "Godzilla ",
    "Beetlejuice",
    "Joker",
    "Kung Fu Panda 4",
    "Alien",
    "Jurassic park",
    "Civil War",
    "King Kong"
]
let apiKey = "b96734e4"

class Lancamentos {
    constructor(titleElement, imgElement) {
        this.titleElement = document.querySelector(titleElement)
        this.imgElement = document.querySelector(imgElement)
    }
    update(data) {
        this.titleElement.innerHTML = data.Title
        this.imgElement.src = data.Poster
    }
}

const getData = async (name, movieInstance) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${apiKey}`)
        if (response.status !== 200) {
            throw new Error("Falha ao realizar requisição")
        }
        const data = await response.json()
        if (data.Response === "False") {
            throw new Error("Falha ao localizar filme")
        }

        movieInstance.update(data)

    } catch (error) {
        console.log("Causa do erro: ", error)
    }
}

let listaMovies = [
    new Lancamentos(`.movieTitle1`, `.moviePoster1`),
    new Lancamentos(`.movieTitle2`, `.moviePoster2`),
    new Lancamentos(`.movieTitle3`, `.moviePoster3`),
    new Lancamentos(`.movieTitle4`, `.moviePoster4`),
    new Lancamentos(`.movieTitle5`, `.moviePoster5`),
    new Lancamentos(`.movieTitle6`, `.moviePoster6`),
    new Lancamentos(`.movieTitle7`, `.moviePoster7`),
    new Lancamentos(`.movieTitle8`, `.moviePoster8`),
    new Lancamentos(`.movieTitle9`, `.moviePoster9`),
    new Lancamentos(`.movieTitle10`, `.moviePoster10`),
    new Lancamentos(`.movieTitle11`, `.moviePoster11`),
    new Lancamentos(`.movieTitle12`, `.moviePoster12`)
]
listaMovies.forEach((movieInstance, index) => {
    getData(movie[index], movieInstance)
})