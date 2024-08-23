function encriptar() {
    let texto = document.getElementById("texto").value; 
    let mensaje = document.querySelector(".mensaje");

    texto = texto
        .replace(/[á]/g, "a")
        .replace(/[é]/g, "e") 
        .replace(/[í]/g, "i")
        .replace(/[ó]/g, "o")
        .replace(/[ú]/g, "u");

    let llavesEncriptacion = texto
        .replace(/e/gi, "enter") 
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        mensaje.value = llavesEncriptacion;
        mensaje.style.backgroundImage = "none";
        document.getElementById("parrafo").style.display = "none";
        document.querySelector(".boton-copiar").style.display = "inline-block";
    }
    else {
        alert("No se ha encontrado ningún texto a encriptar, favor ingresar texto...");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensaje = document.querySelector(".mensaje");

    texto = texto
        .replace(/[á]/g, "a")
        .replace(/[é]/g, "e") 
        .replace(/[í]/g, "i")
        .replace(/[ó]/g, "o")
        .replace(/[ú]/g, "u");

    let llavesEncriptacion = texto
        .replace(/enter/gi, "e") 
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        mensaje.value = llavesEncriptacion;
    }
    else {
        alert("No se ha encontrado ningún texto a desencriptar, favor ingresar texto...");
    }
}

function botonCopiar() {
    let textoCopiar = document.getElementById("mensajeEncriptado").value;

    navigator.clipboard.writeText(textoCopiar);
    alert("Texto copiado con exito...");
}



