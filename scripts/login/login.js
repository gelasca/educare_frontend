const  campoUsuario = document.querySelector('main form div input[type=text]')
const  campoSenha = document.querySelector('main form div input[type=password]')

var resultado = 0

function logar(){
    var usuario = campoUsuario.value
    var senha = campoSenha.value
    console.log(usuario,senha)
    switch(usuario){
        case 'professor':{
            resultado++
            break
        }
        case 'gestor':{
            resultado--
            break
        }
    }
    switch(senha){
        case 'professor123':{
            resultado++
            break
        }
        case 'gestor123':{
            resultado--
            break
        }
    }
    switch (resultado) {
        case 2:{
            window.location.href = '.\/home_discente.html'
            break
        }    
        case -2:{
            window.location.href = '.\/home_docente.html'
            break
        }
        default:{
            alert("Usuário ou Senha não válidos.")
            campoUsuario.value = ''
            campoSenha.value = ''
            break
        }
    }
}