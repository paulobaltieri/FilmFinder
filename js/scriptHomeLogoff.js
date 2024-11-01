const btn = document.querySelector('.is-warning')
const btnOff = document.querySelector('.is-danger')
const modal = document.querySelector('.modal')
const btnSuccess = document.querySelector('.btnYes')


btn.addEventListener('click', () => {
    modal.classList.add("is-active")
})

btnSuccess.addEventListener('click', () => {
    location.href = "../index.html"
})

btnOff.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    modal.classList.remove('is-active')
})