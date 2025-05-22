// Guarda las aficiones en un arreglo
let aficiones = [];

// Agrega una afición a la lista
function agregarAficion() {
  const input = document.getElementById("aficionInput");
  const lista = document.getElementById("listaAficiones");

  const valor = input.value.trim();
  if (valor) {
    aficiones.push(valor);
    const li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);
    input.value = "";
  }
}

function togglePassword() {
    const input = document.getElementById("contrasena");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  
  function mostrarPassword() {
    const input = document.getElementById("contrasena");
    input.type = "text";
  }
  
  function ocultarPassword() {
    const input = document.getElementById("contrasena");
    input.type = "password";
  }
  

// Validación principal al enviar el formulario
document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  // Limpia errores anteriores
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Captura los valores ingresados
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  const confirmar = document.getElementById("confirmarContrasena").value;
  const direccion = document.getElementById("direccion").value.trim();
  const comuna = document.getElementById("comuna").value;
  const telefono = document.getElementById("telefono").value.trim();
  const paginaWeb = document.getElementById("paginaWeb").value.trim();

  let valido = true;

  // Nombre de usuario: letras, dígitos solo al final, 5-10 caracteres, sin símbolos
  const usuarioRegex = /^[A-Za-z]+[0-9]*$/;
  if (!usuario || !usuarioRegex.test(usuario) || usuario.length < 5 || usuario.length > 10) {
    document.getElementById("errorUsuario").textContent = "Usuario inválido.";
    valido = false;
  }

  // Contraseña: 3-6 caracteres, al menos 1 letra y 1 número, no puede contener usuario
  const tieneLetra = /[A-Za-z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);
  if (
    contrasena.length < 3 ||
    contrasena.length > 6 ||
    !tieneLetra ||
    !tieneNumero ||
    contrasena.includes(usuario)
  ) {
    document.getElementById("errorContrasena").textContent = "Contraseña inválida.";
    valido = false;
  }

  // Confirmación de contraseña
  if (contrasena !== confirmar) {
    document.getElementById("errorConfirmar").textContent = "Las contraseñas no coinciden.";
    valido = false;
  }

  // Dirección obligatoria
  if (!direccion) {
    document.getElementById("errorDireccion").textContent = "La dirección es obligatoria.";
    valido = false;
  }

  // Comuna seleccionada
  if (!comuna) {
    document.getElementById("errorComuna").textContent = "Debe seleccionar una comuna.";
    valido = false;
  }

  // Teléfono válido (solo números y 9 dígitos por ejemplo)
  const telefonoRegex = /^[0-9]{9}$/;
  if (!telefono || !telefonoRegex.test(telefono)) {
    document.getElementById("errorTelefono").textContent = "Teléfono inválido (9 dígitos).";
    valido = false;
  }

  // Página web válida
  if (paginaWeb !== "") {
    try {
      new URL(paginaWeb);
    } catch {
      document.getElementById("errorPaginaWeb").textContent = "URL inválida.";
      valido = false;
    }
  }

  // Aficiones: mínimo 2
  if (aficiones.length < 2) {
    document.getElementById("errorAficiones").textContent = "Agrega al menos 2 aficiones.";
    valido = false;
  }

  // Si todo está correcto, puedes mostrar un mensaje o enviar los datos
  if (valido) {
    alert("Formulario enviado correctamente (simulado).");
  }
});
