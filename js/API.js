const movieName = "Deadpool3"
const APIkey = "b96734e4"
const movies = {
    movie01: {
        title: document.querySelector('.titleMovie1'),
        img: document.querySelector('.moviePoster1'),
        rating: document.querySelector('.imdbRating')
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
getData(movies.movie01.title, movies.movie01.img, movieName, movies.movie01.rating)