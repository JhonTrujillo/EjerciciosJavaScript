class Formulario{
    // const misNombres = document.getElementById("nombres");
    // const misApellidos = document.getElementById("apellidos");
    // const miDocumento = document.getElementById("identificacion");
    // const miCorreo = document.getElementById("correo");
    // const miUsuario = document.getElementById("usuario");
    // const miObservaciones = document.getElementById("observaciones");
    constructor(){
        this.misNombres = document.getElementById("nombres")
        this.misApellidos = document.getElementById("apellidos");
        this.miDocumento = document.getElementById("identificacion");
        this.miCorreo = document.getElementById("correo");
        this.miUsuario = document.getElementById("usuario");
        this.miObservaciones = document.getElementById("observaciones");
    }
}
//validar si las cajas de texto estan vacias
function validar() {
    if ((this.misNombres.value === "")
        || (this.misApellidos.value === "")
        || (this.miDocumento.value === "")
        || (this.miCorreo.value === "")
        || (this.miUsuario.value === "")
        || (this.miObservaciones.value === "")) {
        alert("Hay campos vacios");
        // return;
    }
    validarNombres(this.misNombres);
    validarApellidos(this.misApellidos);
    validarCorreo(this.miCorreo);
    validarUsuario(this.miUsuario);
    validarObservaciones(this.miObservaciones);
}
// Validar nombres maximo 60 caracteres
function validarNombres() {
    const nombresRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g;
    if (nombresRegex.test(this.misNombres.value)) {
        // alert("Nombres valido");
        return true;
    } else {
        alert("sobrepasa los cantidad de caracteres permitidos para nombre");
        return false;
    }
}
//validar apellidos maximo 60 caracteres
function validarApellidos() {
    const apellidosRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g;
    if (apellidosRegex.test(this.misApellidos.value)) {
        // alert("Apellido valido");
        return false;
    } else {
        alert("sobrepasa los cantidad de caracteres permitidos para apellido");
        return true;
    }
}
//valida el correo
function validarCorreo() {
    const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    if (correoRegex.test(this.miCorreo.value)) {
        // alert("Correo valido");
        return true;
    } else {
        alert("Correo Invalido");
        return false;
    }
}
//validar usuario maximo 25 caracteres
function validarUsuario() {
    const usuarioRegex = /^([a-zA-Z0-9_-]{0,25})$/g;
    if (usuarioRegex.test(this.miUsuario.value)) {
        // alert("Usuario valido");
        return true;
    } else{
        alert("sobrepasa los cantidad de caracteres permitidos para usuario");
        return false;
    }
}
//validar observaciones maximo 200 caracteres
function validarObservaciones() {
    const observacionesRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,20})$/g;
    if (observacionesRegex.test(this.miObservaciones.value)) {
        // alert("Apellido valido");
        return false;
    } else {
        alert("sobrepasa los cantidad de caracteres permitidos para observaciones");
        return true;
    }
}








