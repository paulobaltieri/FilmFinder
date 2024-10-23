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
        msgAlert.innerHTML = "Usuario <a>VALIDO</a>"
        console.log(inputUser + ' Testando')
        return
    }
    infomacao('is-link', 'is-danger')
    msgAlert.innerHTML = "Usuario <a>INVALIDO</a>"
})

password.addEventListener('keyup', event => {
    let inputPass = event.target.value
    let validacao = operacao("", inputPass)
    if (validacao.isPass) {
        infomacao('is-danger', 'is-link')
        msgAlert.innerHTML = "Senha <a>VALIDA</a>."
        return
    }
    infomacao('is-link', 'is-danger')
    msgAlert.innerHTML = "Senha <a>INVALIDO</a>."
})

