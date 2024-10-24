let form = document.querySelector('.form')
let msg = document.querySelector('.msgInfo')
var msgAlert = document.querySelector('.notification')

let regex = /^[a-zA-Z0-9]{5,}$/

function operacao(username, password) {
    let validaUser = regex.test(username)
    let validarPass = regex.test(password)
    return {
        isUser: validaUser,
        isPass: validarPass
    }
}

function infomacao(msg1, msg2) {
    msgAlert.classList.replace(msg1, msg2)
    msgAlert.classList.remove('hidden')
    return
}

function inputErrorUser(value1, value2) {
    let inputUser = username.classList.replace(value1, value2)
    return inputUser
}

function inputErrorPass(value1, value2) {
    let inputPass = password.classList.replace(value1, value2)
    return inputPass
}

function duracao() {
    setTimeout(() => {
        msgAlert.classList.add('hidden')
    }, 4000)
}

form.addEventListener('submit', event => {
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value
    let valida = operacao(username, password)

    if (valida.isUser && valida.isPass) {
        msgAlert.textContent = "Logando..."
        window.location.href = 'pages/home.html'
        return
    }
})

username.addEventListener('keyup', event => {
    let inputUser = event.target.value
    let validacao = operacao(inputUser, '')
    if (validacao.isUser) {
        infomacao('is-danger', 'is-link')
        inputErrorUser('is-danger', 'is-hovered')
        msgAlert.innerHTML = "Usuario <b>VALIDO</b>"
        duracao()
        return
    }
    infomacao('is-link', 'is-danger')
    inputErrorUser('is-hovered', 'is-danger')
    msgAlert.innerHTML = "Usuario <b>INVALIDO</b>"
    duracao()
})

password.addEventListener('keyup', event => {
    let inputPass = event.target.value
    let validacao = operacao("", inputPass)
    if (validacao.isPass) {
        infomacao('is-danger', 'is-link')
        inputErrorPass('is-danger', 'is-hovered')
        msgAlert.innerHTML = "Senha <b>VALIDA</b>"
        duracao()
        return
    }
    inputErrorPass('is-hovered', 'is-danger')
    infomacao('is-link', 'is-danger')
    msgAlert.innerHTML = "Senha <b>INVALIDA</b>"
    duracao()
})

