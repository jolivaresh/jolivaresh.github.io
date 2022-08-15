
var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");

var animacion = document.querySelector(".contenedor_animacion");
var h3 = document.querySelector(".contenedor_h3");
var parrafo = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".Texto_procesado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){

    ocultarPrimeraPantalla();
    resultado.textContent = encriptar_texto(recuperarTexto())

}

function desencriptar(){

    ocultarPrimeraPantalla();
    resultado.textContent = desencriptar_texto(recuperarTexto())



}




function recuperarTexto(){

    var area = document.querySelector(".casilla_texto");
    return area.value;

}

function ocultarPrimeraPantalla(){
    animacion.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptar_texto(mensaje){
    var texto = mensaje;
    var texto_final = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            texto_final = texto_final + "ai"
        }

        else if(texto[i] == "e"){
            texto_final = texto_final + "enter"
        }

        else if(texto[i] == "i"){
            texto_final = texto_final + "imes"
        }

        else if(texto[i] == "o"){
            texto_final = texto_final + "ober"
        }

        else if(texto[i] == "u"){
            texto_final = texto_final + "ufat"
        }
        else{
            texto_final = texto_final + texto[i];
        }


    }

    return texto_final;

}


function desencriptar_texto(mensaje){
    var texto = mensaje;
    var texto_final = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            texto_final = texto_final + "a"
            i = i+1;
        }

        else if(texto[i] == "e"){
            texto_final = texto_final + "e"
            i = i+4;
        }

        else if(texto[i] == "i"){
            texto_final = texto_final + "i"
            i = i+3;
        }

        else if(texto[i] == "o"){
            texto_final = texto_final + "o"
            i = i+3;
        }

        else if(texto[i] == "u"){
            texto_final = texto_final + "u"
            i = i+3;
        }
        else{
            texto_final = texto_final + texto[i];
        }


    }

    return texto_final;


}




