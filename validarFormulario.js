const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  validarFormulario(e);
});

function validarFormulario(e) {
  e.preventDefault();
  // Obtener los valores de los campos del formulario
  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const asunto = document.querySelector("#asunto").value;
  const mensaje = document.querySelector("#mensaje").value;

  // Validar que los campos no estén vacíos
  if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  const nombreRegex = /^[A-Za-z\s]+$/;
  if (!nombre.match(nombreRegex)) {
    alert("Por favor, introduce solo letras en el campo de nombre.");
    return false;
  }

  // Validar el formato del email utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    return false;
  }

  // Si todos los campos son válidos, se puede enviar el formulario
  alert("Formulario enviado correctamente.");
  reiniciarFormulario()
  return true;

  
}

function reiniciarFormulario() {
 
    setInterval(() => {
        nombre.value = "";
        email.value = "";
        asunto.value = "";
        mensaje.value = "";
    }, 2000);
}
