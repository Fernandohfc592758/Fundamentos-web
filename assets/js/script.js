/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%" /*este nao alterou na porta*/
email.style.width ="100%"/*este nao alterou na porta*/

function validanome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'red'
    }  else {
        txtNome.innerHTML = 'nome válido'
        txtNome.style.color = 'green'
        nomeOK= true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }   else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOK = true
    }

}

function validaAssunto() {
    let  txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
         txtAssunto.innerHTML ='Texto é muito grande, digite no máximo 100 caracteres'
         txtAssunto.style.backgroundColor = 'red'
    }      else{
        txtAssunto.innerHTML ='Texto válido'
        txtAssunto.style.color = 'green'
        assuntoOK = true
    }
}

function enviar() {
    if(nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ('Formulário enviado com suceso!')
    } else {
        alert ('preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}