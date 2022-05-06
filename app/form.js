let formContacto = document.getElementById("form-contacto").addEventListener("submit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault ();
    console.log(e);

    let formulario = e.target // elemento que disparó el evento

}