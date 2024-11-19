const movies = {
    movie01: {
        title: document.querySelector('.titleMovie1'),
        img: document.querySelector('.moviePoster1')
    }
}

const getData = async (title, img, name) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=b96734e4`)

    try {
        const data = await response.json()

        if (response.status !== 200) {
            throw new Error("Dados não encontrados")
        }

        if (data.Response === "False") {
            throw new Error("Erro ao obter dados ")
        }

        title.innerHTML = data.Title
        img.src = data.Poster

    } catch (erro) {
        console.log("Mensagem", erro.message)
    }
}

getData(movies.movie01.title, movies.movie01.img, "Deadpool")