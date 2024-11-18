const movies = {
    movie01: {
        title: document.querySelector('.titleMovie1'),
        img: document.querySelector('.moviePoster1')
    },
    movie02: {
        title: document.querySelector('.titleMovie2'),
        img: document.querySelector('.moviePoster2')
    },
    movie03: {
        title: document.querySelector('.titleMovie3'),
        img: document.querySelector('.moviePoster3')
    },
    movie04: {
        title: document.querySelector('.titleMovie4'),
        img: document.querySelector('.moviePoster4')
    }
}

const movieAPI = (titleElement, imgElement, name) => {
    fetch(`https://www.omdbapi.com/?t=${name}&apikey=b96734e4`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                titleElement.innerHTML = data.Title
                imgElement.src = data.Poster
            } else {
                titleElement.innerHTML = "Não encontrado"
                imgElement.src = "/img/notfound.png"
            }
        })
}

movieAPI(movies.movie01.title, movies.movie01.img, "Deadpool")
movieAPI(movies.movie02.title, movies.movie02.img, "King Kong")
movieAPI(movies.movie03.title, movies.movie03.img, "Logan")
movieAPI(movies.movie04.title, movies.movie04.img, "Godzilla")