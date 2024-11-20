const movieName = ["Deadpool", "Ong bak", "King Kong", "IT"]
const APIkey = "b96734e4"
const movies = {
    movie01: {
        title: document.querySelector('.titleMovie1'),
        img: document.querySelector('.moviePoster1'),
        rating: document.querySelector('.imdbRating')
    },
    movie02: {
        title: document.querySelector('.titleMovie2'),
        img: document.querySelector('.moviePoster2'),
        rating: document.querySelector('.imdbRating2')
    },
    movie03: {
        title: document.querySelector('.titleMovie3'),
        img: document.querySelector('.moviePoster3'),
        rating: document.querySelector('.imdbRating3')
    },
    movie04: {
        title: document.querySelector('.titleMovie4'),
        img: document.querySelector('.moviePoster4'),
        rating: document.querySelector('.imdbRating4')
    }
}

const getData = async (title, img, name, imdb) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${APIkey}`)
    try {
        if (response.status !== 200) {
            throw new Error("Não foi possivel realizar a requisição")
        }

        const data = await response.json()
        if (data.Response === "False") {
            title.innerHTML = "Não encontrado"
            img.src = "/img/notfound.png"
            imdb.innerHTML = "Indisponivel"

            throw new Error("Filme não encontrado")
        }
        console.log(data)

        title.innerHTML = data.Title
        img.src = data.Poster
        imdb.innerHTML = data.imdbRating


    } catch (erro) {
        console.log("Descrição do erro: ", erro.message)
    }
}

movieName.forEach((movieNames, index) => {
    const listMovie = movies[`movie0${index + 1}`]
    getData(listMovie.title, listMovie.img, movieNames, listMovie.rating)
});