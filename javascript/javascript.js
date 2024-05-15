//Constantes
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById("form")
const error = document.getElementById("errores")
const bien = document.getElementById("correcto")


// redirecciona a index.html
function redireccionar() {
    window.location.href = '../index.html';
}


form.addEventListener("submit", e => {
    e.preventDefault()
    let errores = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    error.innerHTML = ""
    bien.innerHTML = ""
    if (nombre.value.length < 4) {
        errores += `El nombre no es valido <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        errores += `El email no es valido <br>`
        entrar = true
    }

    if (entrar) {
        error.innerHTML = errores
    } else {
        bien.innerHTML = "Nos has contactado correctamente!"
        setTimeout(redireccionar, 5000);
    }
})


