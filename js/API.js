let movie = ["Deadpool", "Movie", "Batman", "IT"]
let apiKey = "b96734e4"

class Movies {
    constructor(titleElement, imgElement) {
        this.titleElement = document.querySelector(titleElement)
        this.imgElement = document.querySelector(imgElement)
    }
    update(data) {
        this.titleElement.innerHTML = data.Title
        this.imgElement.src = data.Poster
    }

}

const getData = async (name, instanceMovie) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${apiKey}`)
        console.log(response)
        if (response.status !== 200) {
            throw new Error("Falha ao fazer requisição")
        }
        const data = await response.json()
        if (data.Response === "False") {
            throw new Erro("Filme não encontrado")
        }

        instanceMovie.update(data)


    } catch (erro) {
        console.log("Tipo do erro: ", erro.message)
    }
}

let listMovie = [
    new Movies(".movieTitle1", ".moviePoster1"),
    new Movies(".movieTitle2", ".moviePoster2"),
    new Movies(".movieTitle3", ".moviePoster3"),
    new Movies(".movieTitle4", ".moviePoster4"),
]

listMovie.forEach((movieInstance, index) => {
    getData(movie[index], movieInstance)
});

