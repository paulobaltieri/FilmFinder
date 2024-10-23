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

function infomacao(class1, class2) {
    msgAlert.classList.replace(class1, class2)
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

        console.log(inputUser + ' Testando')
        return
    }

})

password.addEventListener('keyup', event => {
    let inputPass = event.target.value
    let validacao = operacao("", inputPass)
    if (validacao.isPass) {
        infomacao('is-danger', 'is-link')
        msgAlert.innerHTML = "Senha <a>VALIDA</a>."
        console.log(validacao)
        return
    }

    infomacao('is-link', 'is-danger')
    msgAlert.classList.remove('hidden')
    msgAlert.innerHTML = 'usuario ou senha <a>INVALIDO</a>.'
})

