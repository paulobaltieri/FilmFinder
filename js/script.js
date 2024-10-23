let form = document.querySelector('.form')
let msg = document.querySelector('.msgInfo')
let msgUsername = document.querySelector('.msgValidacaoUsername')
let msgPassword = document.querySelector('.msgValidacaoPassword')
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
password.addEventListener('keyup', event => {
    let inputPass = event.target.value
    let validacao = operacao("", inputPass)
    if (validacao.isPass) {
        msgAlert.classList.replace('is-danger', 'is-link')
        msgAlert.classList.remove('hidden')
        msgAlert.innerHTML = "Senha <a>VALIDA</a>."
        console.log(validacao)
        return
    }
    msgAlert.classList.remove('hidden')
    msgAlert.innerHTML = 'usuario ou senha <a>INVALIDO</a>.'
})