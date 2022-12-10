let usuario = document.form1.usuario;
let contrasena = document.form1.contrasena;

function comprobarCampos(){
    let usuarioCorrecto = false, contrasenaCorrecto = false;

    if(/^[A-Z]+\d*[a-z]*_*$/.test(usuario.value) && usuario.value=="Admin"){
        usuarioCorrecto = true;
    }
    if(/^\d{4,8}$/.test(contrasena.value) && contrasena.value=="1234"){
        contrasenaCorrecto = true;
    }

    return usuarioCorrecto && contrasenaCorrecto ? alert("Bienvenidos al sistema") :  alert("Usuario y/o contraseña incorrecta");
}