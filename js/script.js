let form = document.querySelector('.form')
let msg = document.querySelector('.msgInfo')
let msgUsername = document.querySelector('.msgValidacaoUsername')
let msgPassword = document.querySelector('.msgValidacaoPassword')

let regex = /^[a-zA-Z0-9]{5,}$/

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

password.addEventListener('keyup', event => {
    let validacao = event.target.value
    if (validacao) {
        console.log('teste')
        return
    }
    msgUsername.textContent = "O campo deve possuir mais de 5 caracateres"
    console.log(regex.test(validacao))
})