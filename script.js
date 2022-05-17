
const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado; 
}

function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado; 
}


function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for(let i= 0; i< matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;

}



function Desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i = 0; i<matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringParaDesencriptar;
}


function botonCopiar(){
    if (mensaje.value != ""){
        mensaje.select();

        navigator.clipboard.writeText(mensaje.value);

        alert("Se ha copiado el texto. ");

        mensaje.value = "";      
    }

    inputTexto.focus();
}


