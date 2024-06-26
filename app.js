function encriptarTexto(){

    let textoOriginal = document.getElementById("inputText").value;
  
    let caracteres = textoOriginal.split("");

    for (let i = 0; i < caracteres.length; i++) {
        switch (caracteres[i]) {
            case 'a':
                caracteres[i] = 'ai';
                break;
            case 'e':
                caracteres[i] = 'enter';
                break;
            case 'i':
                caracteres[i] = 'imes';
                break;
            case 'o':
                caracteres[i] = 'ober';
                break;
            case 'u':
                caracteres[i] = 'ufat';
                break;
            default:
                // Mantener cualquier otro caracter sin cambios
                break;
        }

        let textoEncriptado = caracteres.join("");

  document.getElementById("outputText").value = textoEncriptado;

  
}
mostrarBoton();
ocultarElementos();
mostrarElemento();
}


function desencriptarTexto(){

    let textoOriginal = document.getElementById("inputText").value;
  
  let textoEncriptado = textoOriginal.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
  
  document.getElementById("outputText").value = textoEncriptado;

}

function mostrarBoton(){

    let botonOculto = document.getElementById("botonOculto");
        botonOculto.removeAttribute('hidden');

}

function copiarTexto(){
    navigator.clipboard.writeText(document.getElementById("outputText").value)
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
}
function ocultarElementos(){

    const myImage = document.getElementById("img_unica");
          myImage.style.visibility = (myImage.style.visibility === "hidden") ? '' : "hidden"; 
          document.getElementById("label2").style.display = "none";
          document.getElementById("textBase").style.display = "none";

}

function mostrarElemento(){

    let textoOculto = document.getElementById("outputText");
        textoOculto.removeAttribute('hidden');

}