let nombre = prompt("Ingrese su nombre");
alert("Hola " + nombre);

function verificarCredenciales(usuario, contrasena) {
    const usuariosValidos = {
        'maticarp': '12345'
    };

    return usuariosValidos[usuario] === contrasena;
}

function iniciarSesion() {
    let intentos = 5;

    while (intentos > 0) {
        const usuario = prompt('Ingrese su usuario:');
        const contrasena = prompt('Ingrese su contraseña:');

        if (verificarCredenciales(usuario, contrasena)) {
            alert('Inicio de sesión exitoso. Bienvenido, ' + usuario + '!');
            return;
        } else {
            intentos--;
            alert(`Credenciales incorrectas. Intentos restantes: ${intentos}`);
        }
    }

    alert('Se han agotado los intentos. Por favor, inténtelo más tarde.');
}

iniciarSesion();



