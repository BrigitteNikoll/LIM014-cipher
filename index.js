import cipher from './cipher.js';


let botonCifrar = document.getElementById("cifrar");
botonCifrar.addEventListener("click", cifrando);
function cifrando () {

try { 
    let textoDeEntrada = document.getElementById("ingresaTexto").value;
    let llave = document.getElementById("desplazamiento").value;
    document.getElementById("textoSalida").value = cipher.encode(llave, textoDeEntrada);
 } catch (error) {
     console.log(error);

}

}

let botonDecifrar = document.getElementById("decifrar");
 botonDecifrar.addEventListener("click", decifrando);
 function decifrando (){

    try {
    let textoDeEntrada = document.getElementById("ingresaTexto").value;
    let llave = document.getElementById("desplazamiento").value;
    document.getElementById("textoSalida").value = cipher.decode(llave, textoDeEntrada);
    }catch (error) {
    console.log(error);

}

}


 let botonLimpiar = document.getElementById("limpiar");
 botonLimpiar.addEventListener("click", limpiando);
 function limpiando (){
     document.getElementById("ingresaTexto").value = "";
     document.getElementById("desplazamiento").value  = "";
     document.getElementById("textoSalida").value  = "";
 }











