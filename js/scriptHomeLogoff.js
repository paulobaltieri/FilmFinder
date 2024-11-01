const btn = document.querySelector('.is-warning')
const btnOff = document.querySelector('.is-danger')
const modal = document.querySelector('.modal')
const btnSuccess = document.querySelector('.is-success')


btn.addEventListener('click', () => {
    modal.classList.add("is-active")
})

btnOff.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    modal.classList.remove('is-active')
    location.href = "../index.html"
})