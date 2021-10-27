const nombre = document.getElementById("name");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    if (nombre.value.length < 3) {
        warnings += 'el nombre no es vallido <br>'
    }
})