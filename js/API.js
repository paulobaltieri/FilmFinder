const movieInfo = {
    movie01: {
        title: document.querySelector('.titleMovie1'),
        img: document.querySelector('.moviePoster1')
    },
    movie02: {
        title: document.querySelector('.titleMovie2'),
        img: document.querySelector('.moviePoster2')

    }
}

const movieData = (titleElement, imgElement, movieName) => {
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=b96734e4`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            titleElement.innerHTML = data.Title
            imgElement.src = data.Poster
        })
        .catch(error => ('Error', error))
}

movieData(movieInfo.movie01.title, movieInfo.movie01.img, "Deadpool")
movieData(movieInfo.movie02.title, movieInfo.movie02.img, "Joker")