
let movieInfo1 = document.querySelector('.titleMovie1')
let moviePoster1 = document.querySelector('.moviePoster1')
let movieInfo2 = document.querySelector('.titleMovie2')
let moviePoster2 = document.querySelector('.moviePoster2')
let movieInfo3 = document.querySelector('.titleMovie3')
let moviePoster3 = document.querySelector('.moviePoster3')
let movieInfo4 = document.querySelector('.titleMovie4')
let moviePoster4 = document.querySelector('.moviePoster4')

function movieNames(field, title, img) {
    const url = `https://www.omdbapi.com/?t=${title}&apikey=b96734e4`
    fetch(url)
        .then(res => res.json())
        .then(dados => {
            console.log("Titulo", dados.Title)
            field.innerHTML = dados.Title
            console.log("Pôster", dados.Poster)
            img.src = dados.Poster

        })
        .catch(error => console.log('ERRO:', error))
}
movieNames(movieInfo1, 'Deadpool', moviePoster1)