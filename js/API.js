let movieInfo = {
    movie01: {
        title: document.querySelector('.titleMovie1'),
        img: document.querySelector('.moviePoster1')
    }
}

const movieAPI = (titleElement, imgElement, name) => {
    const url = `https://www.omdbapi.com/?t=${name}&apikey=b96734e4`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            titleElement.innerHTML = data.Title
            imgElement.src = data.Poster
        })
        console.log(res.json === 200)
}

movieAPI(movieInfo.movie01.title, movieInfo.movie01.img, "Hulk")
