// Seleccionar el formulario de inicio de sesión y el formulario de registro por su clase
const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')

// Función para cambiar la posición de los formularios
function swapPos() {
    // Alternar las clases "above" y "below" para el formulario de inicio de sesión
    loginForm.classList.toggle('above')
    loginForm.classList.toggle('below')

    // Alternar las clases "above" y "below" para el formulario de registro
    signupForm.classList.toggle('above')
    signupForm.classList.toggle('below')
}
