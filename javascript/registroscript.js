const form = document.getElementById('registroForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validar nombre
    const nombreInput = document.getElementById('nombre');
    const nombreValue = nombreInput.value.trim();
    const errorNombre = document.getElementById('errorNombre');
    if (nombreValue === '') {
        errorNombre.textContent = 'Por favor, introduce tu nombre.';
        return;
    } else {
        errorNombre.textContent = '';
    }

    // Validar email
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const errorEmail = document.getElementById('errorEmail');
    if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
        errorEmail.textContent = 'Por favor, introduce un email válido.';
        return;
    } else {
        errorEmail.textContent = '';
    }

    // Validar contraseña
    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value.trim();
    const errorPassword = document.getElementById('errorPassword');
    if (passwordValue.length < 6) {
        errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    } else {
        errorPassword.textContent = '';
    }

    // Validar confirmación de contraseña
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const errorConfirmPassword = document.getElementById('errorConfirmPassword');
    if (confirmPasswordValue !== passwordValue) {
        errorConfirmPassword.textContent = 'Las contraseñas no coinciden.';
        return;
    } else {
        errorConfirmPassword.textContent = '';
    }

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Limpiar los campos de texto después del registro exitoso
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    alert('¡Registro exitoso!');
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener datos de inicio de sesión del formulario
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    // Obtener datos almacenados localmente
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (loginEmail === '' || loginPassword === '') {
        errorLogin.textContent = 'Por favor, completa todos los campos.';
        return;
    }


    // Validar el inicio de sesión
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert('¡Inicio de sesión exitoso!');
    } else {
        const errorLoginEmail = document.getElementById('errorLoginEmail');
        errorLoginEmail.textContent = 'Email o contraseña incorrectos.';
    }
});