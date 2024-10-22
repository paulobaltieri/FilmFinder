let form = document.querySelector('.form')
let msg = document.querySelector('.msgInfo')

let regex = /^['a-zA-Z0-9']{5,}$/

form.addEventListener('submit', event => {
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value

    let validaUser = regex.test(username)
    let validarPass = regex.test(password)

    if (validaUser && validarPass) {
        msg.textContent = "Logando..."
        return
    }
    msg.textContent = "Usuario ou senha invalidos"
})

form.addEventListener('keyup', event => {
    let validacao = regex.test(event.target.password)
    console.log(validacao + " password")
})